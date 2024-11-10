// types.ts
export interface Subtitle {
    startTime: number;
    endTime: number;
    text: string;
  }
  
  export interface TimeMarker {
    time: number;
    label: string;
    color: string;
  }
  
export interface WaveformPlayerProps {
    audioUrl: string;
    subtitles: {
      startTime: number;
      endTime: number;
      text: string;
    }[];
    timeMarkers: {
      time: number;
      label: string;
      color: string;
    }[];
  }
  
  export interface PlayerProps {
    // Add any props if needed
  }
  
  export type AudioRef = React.RefObject<HTMLAudioElement>;