import React from "react";
import "../styles/Vowels.css";
import VowelRender from "../components/vowelsComp/VowelRender.tsx";

interface VowelData {
  sound: string;
  file: string;
  example: string;
  letters: string;
}

const Vowels: React.FC = () => {
  const vowelDict: VowelData[] = [
    {
      sound: "u:",
      file: "u_long",
      example: "She likes blue shoes.",
      letters: "u, o",
    },
    {
      sound: "u",
      file: "u",
      example: "The cook took a look at the book.",
      letters: "oo",
    },
    {
      sound: "ᴈ:",
      file: "ᴈ_long",
      example: "I study German at university.",
      letters: "er",
    },
    { sound: "ə", file: "ə", example: "a painter, a computer", letters: "er" },
    {
      sound: "ɒ",
      file: "ɒ",
      example: "The frog hops on the log.",
      letters: "o",
    },
    { sound: "ou", file: "ou", example: "We go home.", letters: "o" },
    {
      sound: "i",
      file: "i",
      example: "The fish swims in the dish.",
      letters: "i, I",
    },
    { sound: "i:", file: "i_long", example: "I see a tree.", letters: "e" },
    {
      sound: "a:",
      file: "a_long",
      example: "A car park is not far.",
      letters: "ar",
    },
    { sound: "ʌ", file: "ʌ", example: "Mom loves the mug.", letters: "o, u" },
    {
      sound: "æ",
      file: "æ",
      example: "The man has a black hat.",
      letters: "a",
    },
    {
      sound: "ɛ",
      file: "ɛ",
      example: "Ben met a vet in the end.",
      letters: "e",
    },
    {
      sound: "ei",
      file: "ei",
      example: "The train came late.",
      letters: "ai, a",
    },
    { sound: "ai", file: "ai", example: "The kite flies high.", letters: "i" },
  ];
  return (
    <div className="bg">
      {vowelDict.map((vowel, index) => (
        <div className="card">
          <VowelRender
            letters={vowel.letters}
            sound={vowel.sound}
            index={index}
            file={vowel.file}
            example={vowel.example}
          />
        </div>
      ))}
    </div>
  );
};

export default Vowels;
