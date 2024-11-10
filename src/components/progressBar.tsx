import React, {useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { IoPause, IoPlay, IoRepeat, IoArrowForward } from 'react-icons/io5';
import { WaveformPlayerProps } from './types';

// Types and Interfaces
interface WaveSurferRef {
  current: WaveSurfer | null;
}

interface StyledComponentProps {
  visible?: boolean;
  active?: boolean;
  position?: number;
  color?: string;
}

// interface MarkerTimes {
//   start: number;
//   end: number;
// }

// interface StyledProps {
//   position?: number;
//   color?: string;
//   visible?: boolean;
//   active?: boolean;
// }



const formatTime = (time:number) => {
  if (!isFinite(time)) return "0:00";
  
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const WaveformContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #f5f5f5;
  margin: 0 auto;
  border-radius: 8px;
  overflow: visible; 
  position: relative;
  padding: 0 2px; 

   @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;

const HoverEffect = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  height: 80px;
  width: 0;
  mix-blend-mode: overlay;
  background: rgba(255, 255, 255, 0.4);
  opacity: 0;
  transition: opacity 0.2s ease;
  
  ${WaveformContainer}:hover & {
    opacity: 1;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
   @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 40px;
  border: none;
  background: #4CAF50;
  color: white;
  cursor: pointer;
  
  
  &:hover {
    background: #45a049;
  }

  @media (max-width: 768px) {

  }

  @media (max-width: 480px) {

  }
`;

const TimeLabel = styled.div`
  position: absolute;
  z-index: 11;
  bottom: 5px; // Changed from top: 50%
  transform: translateY(0); // Removed vertical centering
  font-size: 11px;
  background: rgba(0, 0, 0, 0.75);
  padding: 2px 6px; // Added horizontal padding
  color: #ddd;
  border-radius: 3px;
  pointer-events: none; // Prevents labels from interfering with waveform interaction

  &#time {
    left: 5px;
  }

  &#duration {
    right: 5px;
  }

    @media (max-width: 768px) {
    font-size: 10px;
    padding: 1px 4px;
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

const VolumeIcon = styled.div`
  cursor: pointer;
  color: #4CAF50;
  display: flex;
  align-items: center;
  
  &:hover {
    opacity: 0.8;
  }
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: #4CAF50;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #45a049;
      transform: scale(1.2);
    }
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #4CAF50;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: all 0.2s;

    &:hover {
      background: #45a049;
      transform: scale(1.2);
    }

    @media (max-width: 480px) {
    width: 80px;
  }
  }
`;

const ControlsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SpeedControls = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

   @media (max-width: 768px) {
    gap: 5px;
  }
`;

const SpeedButton = styled.button<StyledComponentProps>`
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #4CAF50;
  background-color: ${props => props.active ? '#4CAF50' : 'white'};
  color: ${props => props.active ? 'white' : '#4CAF50'};
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
  font-family: inherit;

  &:hover {
    background-color: ${props => props.active ? '#4CAF50' : '#4CAF50'};
  }

   @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
  }
`;

const SubtitlesContainer = styled.div<StyledComponentProps>`
  margin-top: 20px;
  padding: 10px;
  height: 50px
  background: #f5f5f5;
  border-radius: 4px;
  text-align: center;
  display: ${props => props.visible ? 'block' : 'none'};

    @media (max-width: 768px) {
    margin-top: 10px;
    height: 40px;
  }
`;

const SubtitleText = styled.p`
  text-align: center;
  font-size: 24px;
  margin: 0;
  color: #333;

   @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SubtitlesButton = styled.button<StyledComponentProps>`
  background: ${props => props.active ? '#4CAF50' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 10px;

  &:hover {
    background: ${props => props.active ? '#45a049' : '#e0e0e0'};
  }
`;

const TimeMarkersContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  bottom: 0;
`;

const TimeMarkerLine = styled.div<{ position: number; color?: string }>`
  position: absolute;
  left: ${props => props.position}%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: ${props => props.color || 'red'};
  cursor: pointer;
  transition: opacity 0.3s ease;
  z-index: 10;

  &:hover {
    opacity: 0.8;
  }
`;

const TimeMarkerLabel = styled.span`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 11px;
  white-space: nowrap;
`;

const PlayModeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 20px;

   @media (max-width: 768px) {
    margin-left: 0;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const PlayModeToggle = styled.button<StyledComponentProps>`
  background: ${props => props.isActive ? '#4CAF50' : '#ccc'};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family:inherit;

  &:hover {
    opacity: 0.9;
  }
`;

const NavigationControls = styled.div`
  display: flex;
  gap: 10px;

   @media (max-width: 480px) {
    gap: 5px;
  }
`;

const NavButton = styled.button`
  background: none;
  border: 2px solid #4CAF50;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4CAF50;
  transition: all 0.2s ease;

  &:hover {
    background: #4CAF50;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;  

const WaveformPlayer: React.FC<WaveformPlayerProps> = ({ audioUrl, subtitles, timeMarkers }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer: WaveSurferRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>('0:00');
  const [durationSeconds, setDurationSeconds] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0); // maybe the type is string?
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [activeSubtitle, setActiveSubtitle] = useState<string>('');
  const [subtitlesVisible, setSubtitlesVisible] = useState<boolean>(true);

  const [currentMarkerIndex, setCurrentMarkerIndex] = useState<number>(0);
  const [isPlayMode, setIsPlayMode] = useState<boolean>(true);

  const playbackRates:number[] = [0.85, 0.9, 1.0, 1.1, 1.2];

  useEffect(() => {
    if (!audioUrl) return;
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#a8e4a0',
      progressColor: '#3caa3c',
      cursorColor: '#45a049',
      barWidth: 3,
      barRadius: 3,
      cursorWidth: 3,
      height: 70,
      barGap: 2,
      normalize: true,
      responsive: true,
      fillParent: true,
    })

    wavesurfer.current.on('audioprocess', () => {
      const currentTimeValue = wavesurfer.current.getCurrentTime();
      setCurrentTime(formatTime(currentTimeValue));
    
      if (isPlayMode && timeMarkers && timeMarkers.length > currentMarkerIndex + 1) {
        // const currentMarker = timeMarkers[currentMarkerIndex];
        const nextMarker = timeMarkers[currentMarkerIndex + 1];
    
        const currentEndTime = nextMarker 
        ? (typeof nextMarker === 'object' ? nextMarker.time : nextMarker)
        : durationSeconds;

        if (currentTimeValue >= currentEndTime) {
          wavesurfer.current.pause();
          setIsPlaying(false);
        }
  }
});

    const handlePointerMove = (e: PointerEvent) => {
        const hover = waveformRef.current?.querySelector('#hover') as HTMLElement;
        if (hover && e instanceof PointerEvent) {
          hover.style.width = `${e.offsetX}px`;
        }
      };
  
    const waveformElement = waveformRef.current;
      waveformElement.addEventListener('pointermove', handlePointerMove);

    wavesurfer.current.load(audioUrl);

    wavesurfer.current.on('finish', () => {
      setIsPlaying(false);
    });

    wavesurfer.current.on('ready', () => {
      const totalDuration = wavesurfer.current.getDuration();
      setDurationSeconds(totalDuration); // raw duration in seconds
      setDuration(formatTime(totalDuration)); // formatted duration for display
  });

      // Update current time during playback
      wavesurfer.current.on('audioprocess', () => {
        const currentTimeValue = wavesurfer.current.getCurrentTime();
        setCurrentTime(formatTime(currentTimeValue));
      });

      // Separate audioprocess event for subtitles
    wavesurfer.current.on('audioprocess', () => {
      updateActiveSubtitle();
    });

      // Update time on seek
      wavesurfer.current.on('seek', () => {
        const currentTimeValue = wavesurfer.current.getCurrentTime();
        setCurrentTime(formatTime(currentTimeValue));
      });

      return () => {
        if (wavesurfer.current) {
          wavesurfer.current.destroy();
        }
        waveformElement.removeEventListener('pointermove', handlePointerMove);
      };
    }, [audioUrl, subtitles, currentMarkerIndex, isPlayMode, timeMarkers]);
  

  useEffect(() => {
    if (wavesurfer.current && timeMarkers?.length) {
      const handleSeek = () => {
        const currentTime = wavesurfer.current.getCurrentTime();
        
        const newIndex = timeMarkers.findIndex((marker, index) => {
          const currentMarkerTime = typeof marker === 'object' ? marker.time : marker;
          const nextMarkerTime = index < timeMarkers.length - 1 
            ? (typeof timeMarkers[index + 1] === 'object' 
                ? timeMarkers[index + 1].time 
                : timeMarkers[index + 1])
            : durationSeconds;
            
          return currentTime >= currentMarkerTime && currentTime < nextMarkerTime;
        });
        
        if (newIndex >= 0) {
          setCurrentMarkerIndex(newIndex);
        }
      };
  
      wavesurfer.current.on('seek', handleSeek);
      return () => wavesurfer.current.un('seek', handleSeek);
    }
  }, [timeMarkers, durationSeconds]);

  useEffect(() => {
    if (wavesurfer.current) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      wavesurfer.current.on('play', handlePlay);
      wavesurfer.current.on('pause', handlePause);
      wavesurfer.current.on('timeupdate', handleTimeUpdate);
      
      // Set initial position to start of current marker
      const { start } = getMarkerTimes(currentMarkerIndex);
      wavesurfer.current.setTime(start);
      
      return () => {
        wavesurfer.current.un('play', handlePlay);
        wavesurfer.current.un('pause', handlePause);
        wavesurfer.current.un('timeupdate', handleTimeUpdate);
      };
    }
  }, [currentMarkerIndex, timeMarkers]);

  // const handleMarkerEnd = () => {
  //   if (!wavesurfer.current || !timeMarkers?.length) return;
    
  //   const currentMarker = timeMarkers[currentMarkerIndex];
  //   const nextMarker = timeMarkers[currentMarkerIndex + 1];
    
  //   const currentTime = wavesurfer.current.getCurrentTime();
  //   const nextMarkerTime = nextMarker ? (typeof nextMarker === 'object' ? nextMarker.time : nextMarker) : Infinity;
    
  //   if (currentTime >= nextMarkerTime) {
  //     // If we've reached the next marker, pause and reset to current marker start
  //     wavesurfer.current.pause();
  //     const currentStartTime = typeof currentMarker === 'object' ? currentMarker.time : currentMarker;
  //     wavesurfer.current.setTime(currentStartTime);
  //   }
  // };

  const handlePlayPause = (): void => {
    if (!wavesurfer.current) return;
  
    if (isPlaying) {
      // If playing, simply pause
      wavesurfer.current.pause();
      setIsPlaying(false);
    } else {
      // If paused
      const currentTime = wavesurfer.current.getCurrentTime();
      const { start, end } = getMarkerTimes(currentMarkerIndex);
  
      if (isPlayMode) {
        // In sentence mode
        if (currentTime >= end || currentTime < start) {
          // If outside marker boundaries, reset to start
          wavesurfer.current.setTime(start);
        }
      }
      // Resume playback
      wavesurfer.current.play();
      setIsPlaying(true);
    }
  };

  const updateActiveSubtitle = () => {
    if (!wavesurfer.current || !subtitles || !subtitles.length) return;

    const currentTimeValue = wavesurfer.current.getCurrentTime();
    
    const currentSubtitle = subtitles.find(
      sub => 
        currentTimeValue >= sub.startTime && 
        currentTimeValue <= sub.endTime
    );

    setActiveSubtitle(currentSubtitle ? currentSubtitle.text : '');
  };

  const renderSubtitles = () => {
    if (!subtitlesVisible) return null;

    return (
      <SubtitlesContainer>
        {activeSubtitle}
      </SubtitlesContainer>
    );
  };

  const handleMarkerClick = (time: number) => {
    if (wavesurfer.current) {
      wavesurfer.current.seekTo(time / durationSeconds); // seekTo expects a value between 0 and 1
      // Optional: start playing after seeking
      wavesurfer.current.play();
    }
  };

  const getMarkerTimes = (index) => {
    if (!timeMarkers?.length || index < 0 || index >= timeMarkers.length) return { start: 0, end: 0 };
    
    const currentMarker = timeMarkers[index];
    const nextMarker = timeMarkers[index + 1];
    
    const startTime = typeof currentMarker === 'object' ? currentMarker.time : currentMarker;
    const endTime = nextMarker 
      ? (typeof nextMarker === 'object' ? nextMarker.time : nextMarker)
      : wavesurfer.current?.getDuration() || Infinity;
      
    return { start: startTime, end: endTime };
  };

  const handleTimeUpdate = () => {
    if (!wavesurfer.current) return;
    
    const currentTime = wavesurfer.current.getCurrentTime();
    const { start, end } = getMarkerTimes(currentMarkerIndex);
    
    // If we've passed the end of current marker
    if (currentTime >= end) {
      wavesurfer.current.pause();
      wavesurfer.current.setTime(start);
      setIsPlaying(false);
    }
  };

  const toggleSubtitles = () => {
    setSubtitlesVisible(!subtitlesVisible)
  }

  const changePlaybackRate = (rate) => {
    if (wavesurfer.current) {
      wavesurfer.current.setPlaybackRate(rate);
      setPlaybackRate(rate);
    }
  };

  const replayCurrentSentence = () => {
    if (!timeMarkers?.length || currentMarkerIndex < 0 || !wavesurfer.current) return;
  
    const currentMarker = timeMarkers[currentMarkerIndex];
    const startTime = typeof currentMarker === 'object' ? currentMarker.time : currentMarker;
  
    if (isFinite(startTime) && startTime >= 0) {
      wavesurfer.current.setTime(startTime);
          // Always play when repeating
          wavesurfer.current.play();
          setIsPlaying(true);
    }
  };
  // Function to go to next sentence
  const goToNextSentence = () => {
    if (!timeMarkers?.length || currentMarkerIndex >= timeMarkers.length - 1 || !wavesurfer.current) {
      return;
    }
  
    const nextIndex = currentMarkerIndex + 1;
    const nextMarker = timeMarkers[nextIndex];
    const nextTime = typeof nextMarker === 'object' ? nextMarker.time : nextMarker;
  
    if (isFinite(nextTime) && nextTime >= 0) {
      // Don't pause before seeking
      setCurrentMarkerIndex(nextIndex);
      wavesurfer.current.setTime(nextTime);
      
      // If it was already playing, continue playing
      if (isPlaying) {
        wavesurfer.current.play();
      }
    }
  };
  // Add a toggle for play mode
  const togglePlayMode = () => {
    setIsPlayMode(!isPlayMode);
    if (!isPlayMode && timeMarkers && timeMarkers[currentMarkerIndex] && durationSeconds > 0) {
      const normalizedTime = timeMarkers[currentMarkerIndex] / durationSeconds;
      if (isFinite(normalizedTime) && normalizedTime >= 0 && normalizedTime <= 1) {
        wavesurfer.current.seekTo(normalizedTime);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      wavesurfer.current.setVolume(volume);
      setIsMuted(false);
    } else {
      wavesurfer.current.setVolume(0);
      setIsMuted(true);
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
              position={position}
              color={marker.color}
              onClick={() => handleMarkerClick(marker.time)}
              title={`Jump to ${marker.label}`} // Add tooltip
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
              isActive={isPlayMode} 
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
              active={playbackRate === rate}
            >
              {rate}x
            </SpeedButton>
          ))}
        </SpeedControls>

        <SubtitlesButton 
          onClick={toggleSubtitles}
          active={subtitlesVisible}
        >
         {renderSubtitles()}
         CC
        </SubtitlesButton>

      </ControlsContainer>

      <SubtitlesContainer visible={subtitlesVisible}>
        <SubtitleText>{activeSubtitle}</SubtitleText>
      </SubtitlesContainer>
    </div>
  );
};

export default WaveformPlayer;