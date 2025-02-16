import React, {useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { IoPause, IoPlay, IoRepeat, IoArrowForward } from 'react-icons/io5';
import { WaveformPlayerProps } from './types';
import {
  WaveformContainer, 
  HoverEffect, 
  Controls, 
  Button, 
  TimeLabel, 
  VolumeControl, 
  VolumeIcon, 
  VolumeSlider,
  ControlsContainer,
  SpeedControls,
  SpeedButton, 
  SubtitlesContainer,
  SubtitleText, 
  SubtitlesButton, 
  TimeMarkersContainer, 
  TimeMarkerLine, 
  TimeMarkerLabel, 
  PlayModeContainer, 
  PlayModeToggle, 
  NavigationControls, 
  NavButton
} from './styledComponents'

import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { 
  setCurrentMarkerIndex,
  setIsPlaying,
  setVolume,
  setIsMuted,
  setPlaybackRate,
  setSubtitlesVisible,
  setIsPlayMode,
  setCurrentTime,
  setDurationSeconds,
  setDuration,
  setActiveSubtitle
} from '../features/playerslice';

const formatTime = (time:number) => {
  if (!isFinite(time)) return "0:00";
  
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

interface WaveSurferRef {
  current: WaveSurfer | null;
}

const WaveformPlayer: React.FC<WaveformPlayerProps> = ({ audioUrl, subtitles, timeMarkers, onWavesurferMount }) => {

  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer: WaveSurferRef = useRef(null);
  const playbackRates:number[] = [0.85, 0.9, 1.0, 1.1, 1.2];

  const dispatch = useAppDispatch();

  const currentMarkerIndex = useAppSelector(state => state.player.currentMarkerIndex); 
  const isPlaying = useAppSelector(state => state.player.isPlaying); 
  const volume = useAppSelector(state => state.player.volume);
  const isMuted = useAppSelector(state => state.player.isMuted);
  const playbackRate = useAppSelector(state => state.player.playbackRate);
  const subtitlesVisible = useAppSelector(state => state.player.subtitlesVisible);
  const isPlayMode = useAppSelector(state => state.player.isPlayMode);
  const currentTime = useAppSelector(state => state.player.currentTime)
  const durationSeconds = useAppSelector(state => state.player.durationSeconds)
  const duration = useAppSelector(state => state.player.duration)
  const activeSubtitle = useAppSelector(state => state.player.activeSubtitle)

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      console.log(`Initializing${wavesurfer.current}`)
      wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current as HTMLDivElement,
      waveColor: '#a8e4a0',
      progressColor: '#3caa3c',
      cursorColor: '#45a049',
      barWidth: 3,
      barRadius: 3,
      cursorWidth: 3,
      height: 70,
      barGap: 2,
      normalize: true,
      fillParent: true,
      mediaControls: false,
      hideScrollbar: true,
      interact: true,
    })

    let wavesurferInstance = wavesurfer.current;

    if (!audioUrl || !wavesurferInstance) return;

    wavesurferInstance.on('ready', () => {
      wavesurferInstance?.setVolume(volume);
      }
    );

    const handlePointerMove = (e: PointerEvent) => {
      const hover = waveformRef.current?.querySelector('#hover') as HTMLElement;
      if (hover && e instanceof PointerEvent) {
        hover.style.width = `${e.offsetX}px`;
      }
    };

    const handleSeek = () => {
      const currentTime = wavesurferInstance?.getCurrentTime();
    
      const newIndex = timeMarkers.findIndex((marker, index) => {
        const currentMarkerTime = typeof marker === 'object' ? marker.time : marker;
        let nextMarkerTime: number;
    
        if (index < timeMarkers.length - 1) {
          const nextMarker = timeMarkers[index + 1];
          nextMarkerTime = typeof nextMarker === 'object' ? nextMarker.time : nextMarker;
        } else {
          nextMarkerTime = durationSeconds;
        }
    
        return currentTime >= currentMarkerTime && currentTime < nextMarkerTime;
      });
    
      if (newIndex >= 0) {
        dispatch(setCurrentMarkerIndex(newIndex));
      }
    };

    const handlePlay = () => dispatch(setIsPlaying(true));
    const handlePause = () => dispatch(setIsPlaying(false));

    wavesurferInstance.on('audioprocess', () => {
      const currentTimeValue = wavesurferInstance?.getCurrentTime() || 0;
      dispatch(setCurrentTime(formatTime(currentTimeValue)));
      
      if (isPlayMode && timeMarkers && timeMarkers.length > currentMarkerIndex + 1) {
        const nextMarker = timeMarkers[currentMarkerIndex + 1];
        const currentEndTime = nextMarker ? 
        ( typeof nextMarker === 'object' ? nextMarker.time : nextMarker )
           : durationSeconds;
           
        if (currentTimeValue >= currentEndTime) {
          wavesurferInstance?.pause();
          dispatch(setIsPlaying(false));
        }
      }
      
      updateActiveSubtitle();
    });
    wavesurferInstance.on('ready', () => {
      const totalDuration = wavesurferInstance?.getDuration() || 0;
      dispatch(setDurationSeconds(totalDuration));
      dispatch(setDuration(formatTime(totalDuration)));

      if (timeMarkers?.length > 0) {
        const initialMarker = timeMarkers[0];
        const startTime = typeof initialMarker === 'object' ? initialMarker.time : initialMarker;
        wavesurferInstance?.setTime(startTime);
      }
    });

    wavesurferInstance.on('finish', () => {
      dispatch(setIsPlaying(false));
    });

    // onWavesurferMount(wavesurferInstance);

    wavesurferInstance.on('seek', handleSeek);
    wavesurferInstance.on('play', handlePlay);
    wavesurferInstance.on('pause', handlePause);

    const waveformElement = waveformRef.current;
    if (waveformElement) {
      waveformElement.addEventListener('pointermove', handlePointerMove);
    }

    // Load audio
    wavesurferInstance.load(audioUrl);

    return () => {
      if (wavesurferInstance) {
        try {
          wavesurferInstance.pause();
          dispatch(setIsPlaying(false));
          wavesurferInstance.unAll();
          wavesurferInstance.destroy();
        } catch (error) {
          console.warn('Error destroying WaveSurfer:', error);
        }
      }
      waveformElement?.removeEventListener('pointermove', handlePointerMove);
     }};
  }, [ 
    dispatch, 
    audioUrl, 
    timeMarkers, 
    currentMarkerIndex, 
    isPlayMode, 
    durationSeconds,
    onWavesurferMount,
  ]);

  // determine when the instance is fully ready to perform actions like seeking
  useEffect(() => {
    if (!wavesurfer.current) return;

    const handleReady = () => {
        if (timeMarkers?.length > 0) {
            const { start } = getMarkerTimes(currentMarkerIndex);
            wavesurfer.current?.setTime(start);
        }
    };

    wavesurfer.current.on('ready', handleReady);

    return () => {
        wavesurfer.current?.un('ready', handleReady);
    };
}, [currentMarkerIndex, timeMarkers]);

useEffect(() => {
  wavesurfer.current?.load(audioUrl);
  
}, [wavesurfer.current])

  const handlePlayPause = async (): Promise<void> => {
    if (!wavesurfer.current || isTransitioning) return;

    try {
        setIsTransitioning(true);
        
        if (isPlaying) {
            wavesurfer.current.pause();
            dispatch(setIsPlaying(false));
        } else {
            const currentTime = wavesurfer.current.getCurrentTime();
            const { start, end } = getMarkerTimes(currentMarkerIndex);

            if (isPlayMode && (currentTime >= end || currentTime < start)) {
                await wavesurfer.current.setTime(start);
            }

            await wavesurfer.current.play();
            dispatch(setIsPlaying(true));
        }
    } catch (error) {
        console.error('Playback control failed:', error);
        dispatch(setIsPlaying(false));
    } finally {
        setIsTransitioning(false);
    }
};

  // Function to go to next sentence
  const goToNextSentence = async () => {
    if (!timeMarkers?.length || currentMarkerIndex >= timeMarkers.length - 1 || !wavesurfer.current) {
      return;
    }
  
    const nextIndex = currentMarkerIndex + 1;
    const nextMarker = timeMarkers[nextIndex];
    const nextTime = typeof nextMarker === 'object' ? nextMarker.time : nextMarker;
  
    if (isFinite(nextTime) && nextTime >= 0) {
      try {
        // update the marker index
        dispatch(setCurrentMarkerIndex(nextIndex));
        
        // set the time
        wavesurfer.current.setTime(nextTime);
  
        // If it was playing, ensure we properly handle the play promise
        if (isPlaying) {
          await wavesurfer.current.play();
        }
      } catch (err) {
        // Handle any play() promise rejection
        console.warn('Error during playback:', err);
      }
    }
  };

  const updateActiveSubtitle = () => {
    if (!wavesurfer.current || !subtitles || !subtitles.length) return;

    const currentTimeValue = wavesurfer.current.getCurrentTime();
    
    const currentSubtitle = subtitles.find(sub => 
      currentTimeValue >= sub.startTime && currentTimeValue <= sub.endTime
    );
    dispatch(setActiveSubtitle(currentSubtitle ? currentSubtitle.text : ''));
  };

  const handleMarkerClick = async (time: number) => {
    if (wavesurfer.current) {
      try {
        wavesurfer.current.seekTo(time / durationSeconds);
        // Add a small delay before playing
        await new Promise(resolve => setTimeout(resolve, 50));
        await wavesurfer.current.play();
        dispatch(setIsPlaying(true));
      } catch (error) { 
        console.error('Error in handleMarkerClick:', error);
        dispatch(setIsPlaying(false));
      }
    }
};

  const getMarkerTimes = (index: number) => {
    if (!timeMarkers?.length || index < 0 || index >= timeMarkers.length) return { start: 0, end: 0 };
    
    const currentMarker = timeMarkers[index];
    const nextMarker = timeMarkers[index + 1];
    
    const startTime = typeof currentMarker === 'object' ? currentMarker.time : currentMarker;
    const endTime = nextMarker 
      ? (typeof nextMarker === 'object' ? nextMarker.time : nextMarker)
      : wavesurfer.current?.getDuration() || Infinity;
      
    return { start: startTime, end: endTime };
  };

  const toggleSubtitles = () => {
    dispatch(setSubtitlesVisible(!subtitlesVisible));
  }

  const changePlaybackRate = (rate: number) => {
    if (wavesurfer.current) {
      wavesurfer.current.setPlaybackRate(rate);
      dispatch(setPlaybackRate(rate));
    }
  };

  const replayCurrentSentence = async () => {
    if (!timeMarkers?.length || currentMarkerIndex < 0 || !wavesurfer.current) return;
  
    const currentMarker = timeMarkers[currentMarkerIndex];
    const startTime = typeof currentMarker === 'object' ? currentMarker.time : currentMarker;
  
    if (isFinite(startTime) && startTime >= 0) {
      try {
        await wavesurfer.current.setTime(startTime);
        // Add a small delay before playing
        await new Promise(resolve => setTimeout(resolve, 50));
        await wavesurfer.current.play();
        dispatch(setIsPlaying(true));
      } catch (error) {
        console.error('Error in replayCurrentSentence:', error);
        dispatch(setIsPlaying(false));
      }
    }
};

  // Add a toggle for play mode
  const togglePlayMode = async () => {
    if (!wavesurfer.current) return;
    
    const wasPlaying = isPlaying;
    
    // Pause before switching modes
    if (wasPlaying) {
        wavesurfer.current.pause();
        dispatch(setIsPlaying(false));
    }
    
    // Toggle play mode
    dispatch(setIsPlayMode(!isPlayMode));
    
    // Set correct position
    if (timeMarkers && timeMarkers[currentMarkerIndex] && durationSeconds > 0) {
        const marker = timeMarkers[currentMarkerIndex];
        const markerTime = typeof marker === 'object' ? marker.time : marker;
        await wavesurfer.current.setTime(markerTime);
    }
    
    // Resume playing if it was playing before
    if (wasPlaying) {
        try {
            await new Promise(resolve => setTimeout(resolve, 50));
            await wavesurfer.current.play();
            dispatch(setIsPlaying(true));
        } catch (error) {
            console.error('Error resuming playback:', error);
            dispatch(setIsPlaying(false));
        }
    }
};

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target?.value);
    dispatch(setVolume(newVolume));
    wavesurfer.current?.setVolume(newVolume);
    dispatch(setIsMuted(newVolume === 0));
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      wavesurfer.current?.setVolume(volume);
      dispatch(setIsMuted(false));
    } else {
      wavesurfer.current?.setVolume(0);
      dispatch(setIsMuted(true));
    }
  };

  const renderTimeMarkers = () => {
    if (durationSeconds === 0) return null; // Don't render markers until duration is set

    return (
      <TimeMarkersContainer>
        {timeMarkers.map((marker, index) => {
          // Calculate position as percentage of total duration
          const position = (marker.time / durationSeconds) * 100;
          
          return (
            <TimeMarkerLine
              key={index}
              $position={position}
              color={marker.color}
              onClick={() => handleMarkerClick(marker.time)}
              title={`Jump to ${marker.label}`}
            >
              <TimeMarkerLabel>{marker.label}</TimeMarkerLabel>
            </TimeMarkerLine>
          );
        })}
      </TimeMarkersContainer>
    );
  };

  return (
    <div className='waveform-overlay'>
      <WaveformContainer ref={waveformRef}>

      <HoverEffect id="hover"/>

        <TimeLabel id="time">{currentTime}</TimeLabel>

        <TimeLabel id="duration">{duration}</TimeLabel>
        {renderTimeMarkers()}
      </WaveformContainer>
      <ControlsContainer>
        <Controls>
          <Button onClick={handlePlayPause}>  
            
            {isPlaying ? 
            <IoPause 
                style={{ fontSize: '30px', width: "60px", height: "60px", borderRadius:"30px", }} 
                /> : 
            <IoPlay 
                style={{ fontSize: '30px', width: "60px", height: "60px", borderRadius:"30px",  }}
                />
            }
          </Button>

          {/* Play mode toggle and navigation controls */}
          <PlayModeContainer>
            <PlayModeToggle 
              $active={isPlayMode} 
              onClick={togglePlayMode}
            >
              Sentence Mode: {isPlayMode ? 'ON' : 'OFF'}
            </PlayModeToggle>

            {isPlayMode && (
              <NavigationControls>
                <NavButton onClick={replayCurrentSentence}>
                  <IoRepeat style={{ fontSize: '24px' }} />
                </NavButton>
                <NavButton onClick={goToNextSentence}>
                  <IoArrowForward style={{ fontSize: '24px' }} />
                </NavButton>
              </NavigationControls>
            )}
          </PlayModeContainer>
        </Controls>
        <VolumeControl>
          <VolumeIcon onClick={handleMuteToggle}>
            {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeHigh size={24} />}
          </VolumeIcon>
          <VolumeSlider
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
          />
        </VolumeControl>
        <SpeedControls>
          {playbackRates.map((rate) => (
            <SpeedButton
              key={rate}
              onClick={() => changePlaybackRate(rate)}
              $active={playbackRate === rate}
            >
              {rate}x
            </SpeedButton>
          ))}
        </SpeedControls>

        <SubtitlesButton 
          onClick={toggleSubtitles}
          $active={subtitlesVisible}
        >
         CC
        </SubtitlesButton>

      </ControlsContainer>

      <SubtitlesContainer $visible={subtitlesVisible}>
        <SubtitleText>{activeSubtitle}</SubtitleText>
      </SubtitlesContainer>
    </div>
  );
};

export default WaveformPlayer;


  // const [isPlaying, setIsPlaying] = useState<boolean>(false); // done
  // const [volume, setVolume] = useState<number>(1); // done
  // const [isMuted, setIsMuted] = useState<boolean>(false); // done 
  // const [currentTime, setCurrentTime] = useState<string>('0:00'); // done
  // const [durationSeconds, setDurationSeconds] = useState<number>(0); // done
  // const [duration, setDuration] = useState<number>(0); // done 
  // const [playbackRate, setPlaybackRate] = useState<number>(1.0); // done
  // const [activeSubtitle, setActiveSubtitle] = useState<string>(''); //
  // const [subtitlesVisible, setSubtitlesVisible] = useState<boolean>(true); // done
  // const [currentMarkerIndex, setCurrentMarkerIndex] = useState<number>(0); // done
  // const [isPlayMode, setIsPlayMode] = useState<boolean>(true); // done


  // wavesurfer.current = WaveSurfer.create({
  //   container: waveformRef.current,
  //   waveColor: '#a8e4a0',
  //   progressColor: '#3caa3c',
  //   cursorColor: '#45a049',
  //   barWidth: 3,
  //   barRadius: 3,
  //   cursorWidth: 3,
  //   height: 70,
  //   barGap: 2,
  //   normalize: true,
  //   responsive: true,
  //   fillParent: true,
  //   backend: 'MediaElement', // More stable on mobile
  //   mediaControls: false,
  //   hideScrollbar: true,
  //   interact: true
  // })

//   useEffect(() => {
//     if (wavesurfer.current && wavesurfer.current.isReady && timeMarkers?.length > 0) {
//         const { start } = getMarkerTimes(currentMarkerIndex);
//         wavesurfer.current.setTime(start);
//     }
// }, [currentMarkerIndex]);

  // Function to go to next sentence
  // const goToNextSentence = async () => {
  //   if (!timeMarkers?.length || currentMarkerIndex >= timeMarkers.length - 1 || !wavesurfer.current) {
  //     return;
  //   }
  
  //   const nextIndex = currentMarkerIndex + 1;
  //   const nextMarker = timeMarkers[nextIndex];
  //   const nextTime = typeof nextMarker === 'object' ? nextMarker.time : nextMarker;
  
  //   if (isFinite(nextTime) && nextTime >= 0) {
  //     setCurrentMarkerIndex(nextIndex);
      
  //     try {
  //       await wavesurfer.current.setTime(nextTime);
  //       if (isPlaying) {
  //         // Add a small delay before playing
  //         await new Promise(resolve => setTimeout(resolve, 50));
  //         await wavesurfer.current.play();
  //       }
  //     } catch (error) {
  //       console.error('Error in goToNextSentence:', error);
  //     }
  //   }
  // };

    // const handleTimeUpdate = () => {
  //   if (!wavesurfer.current) return;
    
  //   const currentTime = wavesurfer.current.getCurrentTime();
  //   const { start, end } = getMarkerTimes(currentMarkerIndex);
    
  //   // If we've passed the end of current marker
  //   if (currentTime >= end) {
  //     wavesurfer.current.pause();
  //     wavesurfer.current.setTime(start);
  //     setIsPlaying(false);
  //   }
  // };