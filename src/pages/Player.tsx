import React, { useRef, useState } from 'react';
import "../styles/Player.css"
import WaveformPlayer from '../components/progressBar';
import { PlayerProps } from '../components/types';
import Quiz from '../components/Quiz';
import WaveSurfer from 'wavesurfer.js';
import { audioTracks } from '../data/audioData';

const Player: React.FC<PlayerProps> = () => {
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState(audioTracks[0].id);
  // Add new state for Quiz visibility
  const [showQuiz, setShowQuiz] = useState(false);

  // Find the selected track
  const audioTrack = audioTracks.find(track => track.id === selectedTrackId) || audioTracks[0];

  const handleTimeJump = (time: number) => {
      if (wavesurferRef.current) {
          wavesurferRef.current.seekTo(time / wavesurferRef.current.getDuration());
          wavesurferRef.current.play();
      }
  };

  const handleTrackChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedTrackId(event.target.value);
      // Reset WaveSurfer if needed
      if (wavesurferRef.current) {
          wavesurferRef.current.stop();
      }
  };

  // Add toggle function for Quiz visibility
  const toggleQuiz = () => {
      setShowQuiz(!showQuiz);
  };

  return (
      <div className="audio-player">
          <div className="track-selector">
              <label htmlFor="track-select">Select Audio Track: </label>
              <select 
                  id="track-select" 
                  value={selectedTrackId} 
                  onChange={handleTrackChange}
              >
                  {audioTracks.map(track => (
                      <option key={track.id} value={track.id}>
                          {track.title}
                      </option>
                  ))}
              </select>
          </div>

          <WaveformPlayer
              audioUrl={audioTrack.audio}
              subtitles={audioTrack.subtitles}
              timeMarkers={audioTrack.timeMarkers}
              onWavesurferMount={(wavesurfer) => {
                  wavesurferRef.current = wavesurfer;
              }}
          />
          
          {/* Add toggle button */}
          <button 
              className="quiz-toggle-button" 
              onClick={toggleQuiz}
          >
              {showQuiz ? 'Hide Quiz' : 'Show Quiz'}
          </button>

          {/* Conditionally render Quiz component */}
          {showQuiz && (
              <Quiz 
                  onTimeJump={handleTimeJump}
                  questions={audioTrack.quiz}
              />
          )}
      </div>
  );
};

export default Player;

// const subtitles: Subtitle[] = [
    //     { startTime: 0.1, endTime: 7.2, text: "The cultural status of tattooing has steadily evolved from that of an anti-social activity in the 1960s" },
    //     { startTime: 7.5, endTime: 12, text: "to that of a socially acceptable fashion statement today." },
    //     { startTime: 13, endTime: 19.5, text: "First adopted and flaunted by influential rock stars like the Rolling Stones in the early 1970s," },
    //     { startTime: 20, endTime: 22.8, text: "tattooing had, by the late 1980s,"},
    //     { startTime: 23, endTime: 27, text: "become accepted by ever-broader segments of mainstream society." },
    //     { startTime: 27.2, endTime:32, text: "Today, tattoos are routinely seen on rock musicians, sports stars " },
    //     { startTime: 32.3, endTime: 38.6, text: "and other public figures who play a significant role in setting the culture's behaviour patterns." },
    //     { startTime: 39.2, endTime: 45, text: "The market demographics for tattoo services are now skewed heavily toward mainstream customers. " },
    //     { startTime: 47, endTime: 51.5, text: "Tattooing today is the sixth fastest-growing retail business in the United States. " },
    //     { startTime: 52, endTime: 56.4, text: "The single fastest-growing demographic group seeking tattoo services is, " },
    //     { startTime: 56.7, endTime: 60, text: "to the surprise of many, middle-class suburban women." },
    //     { startTime: 60.6, endTime: 63.3, text: "The state and local governments of New Jersey, " },
    //     { startTime: 63.7, endTime: 66, text: "like those of other regions across the United States," },
    //     { startTime: 66.3, endTime: 69, text: "are being forced to alter their attitude and laws" },
    //     { startTime: 69.2, endTime: 73.8, text: "in response to the changing cultural status and popularity of tattooing " },
    //     { startTime: 74, endTime: 78.4, text: "and have now adopted a more open-minded approach to tattoos." },
    //     { startTime: 79.8, endTime: 82, text: "According to one recent journal," },
    //     { startTime: 82.1, endTime: 87.3, text: "tattoos were most common among motorcyclists, criminals and gang members. " },
    //     { startTime: 87.5, endTime: 93.4, text: "However, these stereotypical associations have changed over the past 20 years " },
    //     { startTime: 93.8, endTime: 99, text: "and it is estimated that almost half of the tattoos now being done are on women." },
    //   ];
      
    //   const timeMarkers: TimeMarker[] = [
    //     { time: 0.1, label: "1", color: "red" },
    //     { time: 12.8, label: "2", color: "red" },
    //     { time: 27.2, label: "3", color: "red" },
    //     { time: 39.2, label: "4", color: "red" },
    //     { time: 46.7, label: "5", color: "red" },
    //     { time: 52, label: "6", color: "red" },
    //     { time: 60.6, label: "7", color: "red" },
    //     { time: 79.8, label: "8", color: "red" },
    //     { time: 87.5, label: "9", color: "red" },
    // ];
    