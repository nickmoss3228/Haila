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

 export interface Meaning {
    meaning: string;
    example: string;
    translation: string;
  }
  
  export interface VerbData {
    verb: string;
    meanings: Meaning[];
  }
  
  export interface PhrasalData {
    mainMeaning?: string;
    verbs: VerbData[];
  }
  
  export interface PhrasalVerbData extends Array<PhrasalData> {}
  
  export interface PhrasalsModelProps {
    isOpen: boolean;
    onClose: () => void;
    preposition: string;
    data: PhrasalVerbData | null;
  }

  export interface PhrasalVerbsType {
  [key: string]: PhrasalVerbData[];
}
  
export interface SelectedExamples {
    meanings: string[];
    examples: string[];
    translations: string[];
  }
  
  export interface PlayerProps {
    // Add any props if needed
  }
  
  export type AudioRef = React.RefObject<HTMLAudioElement>;