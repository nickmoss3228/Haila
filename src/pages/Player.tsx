import React, { useRef, useState } from "react";
import "../styles/Player.css";
import WaveformPlayer from "../components/progressBar";
import { PlayerProps } from "../components/types";
import Quiz from "../components/Quiz";
import WaveSurfer from "wavesurfer.js";
import { audioTracks } from "../data/audioData";

const Player: React.FC<PlayerProps> = () => {
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState(audioTracks[0].id);

  // Add state for Quiz visibility
  const [showQuiz, setShowQuiz] = useState(false);

  // Find the selected track
  const audioTrack =
    audioTracks.find((track) => track.id === selectedTrackId) || audioTracks[0];

  // Handle the time jumps to the time marker in a quiz
  const handleTimeJump = (time: number) => {
    if (wavesurferRef.current) {
      wavesurferRef.current.seekTo(time / wavesurferRef.current.getDuration());
      wavesurferRef.current.play();
    }
  };

  // Event handler for changing the track
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
          {audioTracks.map((track) => (
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
      <button className="quiz-toggle-button" onClick={toggleQuiz}>
        {showQuiz ? "Hide Quiz" : "Show Quiz"}
      </button>

      {/* Conditionally render Quiz component */}
      {showQuiz && (
        <Quiz onTimeJump={handleTimeJump} questions={audioTrack.quiz} />
      )}
    </div>
  );
};

export default Player;
