import React, { useRef, useState, useEffect } from 'react'
import BoysGirls from "../assets/rep/boysgirls.mp3"
import styles from "../styles/Repetition.module.css"
import { IoPlay } from "react-icons/io5";
import { IoPause } from "react-icons/io5";


const Repetition = ({audio}) => {
    // state
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);

    const audioPlayer = useRef<HTMLAudioElement | null>(null) //reference our audio component
    const progressBar = useRef<HTMLAudioElement | null>(null) //reference our progress bar
    const animationRef = useRef<number | null>(null) // reference the animation

    useEffect(() => {
        const updateDuration = () => {
            if (audioPlayer.current) {
                const sec = Math.floor(audioPlayer.current.duration);
                setDuration(sec);
                if (progressBar.current) {
                    progressBar.current.max = `${sec}`;
                }
            }
        };

        if (audioPlayer.current) {
            audioPlayer.current.addEventListener('loadedmetadata', updateDuration);
        }

        return () => {
            if (audioPlayer.current) {
                audioPlayer.current.removeEventListener('loadedmetadata', updateDuration);
            }
        };
    }, []);

    const handlePlayPause = () => {
        if (audioPlayer.current) {
            const prevValue = isPlaying;
            setIsPlaying(!prevValue);
            if (!prevValue) {
                audioPlayer.current.play();
                animationRef.current = requestAnimationFrame(whilePlaying);
            } else {
                audioPlayer.current.pause();
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            }
        }
    };

    const whilePlaying = () => {
        if (audioPlayer.current && progressBar.current) {
            progressBar.current.value = `${audioPlayer.current.currentTime}`;
            changePlayerCurrentTime();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
    };

    const calculateTime = (secs:number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const changeRange = () => {
        if (audioPlayer.current && progressBar.current) {
            audioPlayer.current.currentTime = Number(progressBar.current.value);
            changePlayerCurrentTime();
        }
    };

    const changePlayerCurrentTime = () => {
        if (progressBar.current) {
            const value = Number(progressBar.current.value);
            progressBar.current.style.setProperty('--seek-before-width', `${(value / duration) * 100}%`);
            setCurrentTime(value);
        }
    };

  return (
    <div className={styles.main}>
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src={audio}/>

            <button onClick={handlePlayPause} className={styles.playPause}>
                {isPlaying ? <IoPause className={styles.pause} /> : <IoPlay className={styles.play} />}
            </button>

            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>   
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange}/>
            </div>
     

            {/* duration */}
            <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>

        </div>
    </div>
    
  )
}

export default Repetition


// useEffect(() => {
//     const sec = Math.floor(audioPlayer.current.duration)
//     setDuration(sec);
//     progressBar.current.max = sec;
// }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

// const handlePlayPause = () => {
//     const prevValue = isPlaying;
//     setIsPlaying(!prevValue)
//     if (!prevValue) {
//         audioPlayer.current.play();
//         animationRef.current = requestAnimationFrame(whilePlaying)
//     } else {
//         audioPlayer.current.pause();
//         cancelAnimationFrame(animationRef.current);
//     }
// }

// const whilePlaying = () => {
//     progressBar.current.value = audioPlayer.currentTime;
//     changePlayerCurrentTime();
//     animationRef.current = requestAnimationFrame(whilePlaying)
// }

// const changeRange = () => {
//     audioPlayer.current.currentTime = progressBar.current.value;
//     changePlayerCurrentTime();
// }

// const changePlayerCurrentTime = () => {
//     progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
//     setCurrentTime(progressBar.current.value)
// }