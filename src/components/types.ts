export interface Meaning {
  meaning: string;
  example: string;
  translation: string;
}

export interface VerbData {
  verb: string;
  meanings: {
    meaning: string;
    example: string;
    translation: string;
  }[];
}

export interface PhrasalData {
  mainMeaning?: string;
  verbs: VerbData[];
}

export interface PhrasalsModelProps {
  isOpen: boolean;
  onClose: () => void;
  preposition: string;
  data: PhrasalData[] | null;
}

export interface PhrasalVerbsType {
  [key: string]: PhrasalData[];
}

export interface SelectedExamples {
  meanings: string[];
  examples: string[];
  translations: string[];
}

export type AudioData = {
  url: string;
  title: string;
  number: string;
};

export type UnitData = {
  [key: string]: string;
};

export type AspectData = {
  [key: string]: UnitData;
};

export type AspectObject = {
  [K in Aspect]?: UnitData;
};

export type AspectItem = {
  [key: string]: UnitData;
};

export type LevelAudiosType = {
  [key: string]: AspectItem[];
};

export type LevelData = {
  [key: string]: Array<{ [key: string]: UnitData }>;
};

export interface LevelSelectorProps {
  onChange: (level: Level) => void;
}

export interface AspectSelectorProps {
  onChange: (aspect: string) => void;
  level: Level;
}

export type Level = "Beginner" | "Elementary" | "Pre-Intermediate" | "Intermediate";

export type Aspect = "Listening" |
  "Vocabulary" |
  "Video Listening" |
  "Revise And Check" |
  "Practical English" |
  "Workbook" 

export interface UnitSelectorProps {
  onChange: (unit: string) => void;
  aspect: string;
  data: UnitData;
  level: Level;
}

export interface AudioListProps {
  aspect: string;
  unit: string;
  level: string | null;
  data: UnitData;
}

export interface MediaState {
  audio: string | null;
  video: string | null;
  workbook: string | null;
}

// import WaveSurfer from "wavesurfer.js";

// export interface Subtitle {
//   startTime: number;
//   endTime: number;
//   text: string;
// }

// export interface TimeMarker {
//   time: number;
//   label: string;
//   color: string;
// }

// export interface WaveformPlayerProps {
//   audioUrl: string;
//   subtitles: {
//     startTime: number;
//     endTime: number;
//     text: string;
//   }[];
//   timeMarkers: {
//     time: number;
//     label: string;
//     color: string;
//   }[];
//   onWavesurferMount: (wavesurfer: WaveSurfer) => void;
// }

// export interface QuizQuestion {
//   question: string;
//   options: string[];
//   correctAnswer: number;
//   referenceTime: number;
// }

// export type AudioRef = React.RefObject<HTMLAudioElement>;
