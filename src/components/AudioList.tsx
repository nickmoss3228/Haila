import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import type { AudioListProps, MediaState } from "../components/types";

const YANDEX_BASE_URL = import.meta.env.VITE_YANDEX_BASE_URL;

const AudioList: React.FC<AudioListProps> = ({ aspect, unit, data, level }) => {
  const audioNumbers = data[unit];

  const [currentMedia, setCurrentMedia] = useState<MediaState>({
    audio: null,
    video: null,
    workbook: null,
  });
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  const playMedia = async (mediaNumber: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const mediaSources = await getMediaSource(mediaNumber);
      // console.log(mediaSources);
      let newActivePlayer = null;

      if (
        ["Video Listening", "Practical English", "Revise And Check"].includes(
          aspect
        )
      ) {
        newActivePlayer = mediaSources.video ? "video" : null;
      } else if (["Listening", "Vocabulary"].includes(aspect)) {
        newActivePlayer = mediaSources.audio ? "audio" : null;
      } else if (aspect === "Workbook") {
        newActivePlayer = mediaSources.workbook ? "workbook" : null;
      }

      setCurrentMedia(mediaSources);
      setActivePlayer(newActivePlayer);
    } catch (err) {
      console.error("Error fetching media source:", err);
      setError("Failed to load media. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getMediaSource = async (mediaNumber: string):Promise<MediaState> => {
    const mediaSources = {
      video: [
        "Video Listening",
        "Practical English",
        "Revise And Check",
      ].includes(aspect)
        ? `${YANDEX_BASE_URL}/${level}/Video/${aspect}/${mediaNumber}.mp4`
        : null,
      audio: ["Listening", "Vocabulary"].includes(aspect)
        ? `${YANDEX_BASE_URL}/${level}/studentsbook/${mediaNumber}.mp3`
        : null,
      workbook:
        aspect === "Workbook"
          ? `${YANDEX_BASE_URL}/${level}/workbook/${mediaNumber}.mp3`
          : null,
    };
    // console.log("Constructed media URLs:", mediaSources);
    return mediaSources;
  };

  return (
    <div className="audiolist-render">
      <div className="audiolist-name">{unit}</div>
      <ul className="audios">
        {audioNumbers.split(", ").map((mediaNumber: string) => (
          <button
            key={mediaNumber}
            onClick={() => playMedia(mediaNumber)}
            className="btn-unit-number"
            disabled={isLoading}
          >
            {mediaNumber}
          </button>
        ))}
      </ul>
      {isLoading && <p>Loading media...</p>}

      {error && <p className="error">{error}</p>}

      <div className="media-player-container">
        {activePlayer === "audio" && currentMedia.audio && (
          <AudioPlayer
            src={currentMedia.audio}
            // onPlay={() => console.log("onPlay audio")}
            style={{ height: "120px" }}
            className="audio-player"
          />
        )}
        {activePlayer === "workbook" && currentMedia.workbook && (
          <AudioPlayer
            src={currentMedia.workbook}
            // onPlay={() => console.log("onPlay workbook")}
            style={{ height: "120px" }}
            className="audio-player"
          />
        )}
        {activePlayer === "video" && currentMedia.video && (
          <video
            src={currentMedia.video}
            controls
            style={{ width: "100%", maxHeight: "400px" }}
            className="video-player"
          />
        )}
      </div>
    </div>
  );
};
export default AudioList;

  // useEffect(() => {
  //   console.log("Current media state:", currentMedia);
  //   console.log("Active player:", activePlayer);
  // }, [currentMedia]);