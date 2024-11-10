import React, { useRef, useEffect, useState } from 'react';

const AudioWaveform = ({ audioElement }) => {
  const canvasRef = useRef(null);
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audioElement) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const createAudioBuffer = async () => {
      const response = await fetch(audioElement.src);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = await audioContext.decodeAudioData(arrayBuffer);
      setAudioBuffer(buffer);
    };

    createAudioBuffer();

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
    };
  }, [audioElement]);

  useEffect(() => {
    if (!audioBuffer) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const drawWaveform = () => {
      ctx.clearRect(0, 0, width, height);

      // Styling for the waveform
      ctx.strokeStyle = '#3E2F5B';
      ctx.lineWidth = 2;

      const data = audioBuffer.getChannelData(0);
      const step = Math.ceil(data.length / width);
      const amp = height / 2;

      ctx.save();
      ctx.scale(1, 0.6); // Stretch the waveform vertically
      ctx.translate(0, height / 4); // Push it down to center

      ctx.beginPath();
      for (let i = 0; i < width; i++) {
        let min = 1.0;
        let max = -1.0;

        for (let j = 0; j < step; j++) {
          const datum = data[(i * step) + j];
          if (datum < min) min = datum;
          if (datum > max) max = datum;
        }

        ctx.lineTo(i, (1 + min) * amp);
        ctx.lineTo(i, (1 + max) * amp);
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawProgressIndicator = () => {
      const progress = (currentTime / audioBuffer.duration) * width;
      ctx.strokeStyle = '#FF4081';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(progress, 0);
      ctx.lineTo(progress, height);
      ctx.stroke();
    };

    drawWaveform();
    drawProgressIndicator();
  }, [audioBuffer, currentTime]);

  const handleCanvasClick = (e) => {
    if (!audioBuffer) return;
  
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
  
    // Consider the scaling due to high-DPI screens
    const scaleX = canvas.width / rect.width;
    const x = (e.clientX - rect.left) * scaleX; // Adjust for potential scaling
  
    const clickedTime = (x / canvas.width) * audioBuffer.duration;
    audioElement.currentTime = clickedTime;
  };

  return (
    <div style={{ overflow: 'hidden', borderRadius: '30px' }}>
      <canvas
        ref={canvasRef}
        width={1200}
        height={200} // Increased height for more emphasis
        onClick={handleCanvasClick}
        style={{ cursor: 'pointer', width: '100%', height: '100px' }}
      />
    </div>
  );
};

export default AudioWaveform;