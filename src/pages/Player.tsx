import React, {useRef} from 'react';
import BoysGirls from "../assets/rep/boysgirls.mp3"
import "../styles/Player.css"
import WaveformPlayer from '../components/progressBar';
import tattoo from "../assets/tattoo.mp3"
import { PlayerProps, Subtitle, TimeMarker, AudioRef } from '../components/types';

// import popular from "../assets/popular.mp3"


const Player: React.FC<PlayerProps> = () => {
    const subtitles: Subtitle[] = [
        { startTime: 0.1, endTime: 7.2, text: "The cultural status of tattooing has steadily evolved from that of an anti-social activity in the 1960s" },
        { startTime: 7.5, endTime: 12, text: "to that of a socially acceptable fashion statement today." },
        { startTime: 13, endTime: 19.5, text: "First adopted and flaunted by influential rock stars like the Rolling Stones in the early 1970s," },
        { startTime: 20, endTime: 22.8, text: "tattooing had, by the late 1980s,"},
        { startTime: 23, endTime: 27, text: "become accepted by ever-broader segments of mainstream society." },
        { startTime: 27.2, endTime:32, text: "Today, tattoos are routinely seen on rock musicians, sports stars " },
        { startTime: 32.3, endTime: 38.6, text: "and other public figures who play a significant role in setting the culture's behaviour patterns." },
        { startTime: 39.2, endTime: 45, text: "The market demographics for tattoo services are now skewed heavily toward mainstream customers. " },
        { startTime: 47, endTime: 51.5, text: "Tattooing today is the sixth fastest-growing retail business in the United States. " },
        { startTime: 52, endTime: 56.4, text: "The single fastest-growing demographic group seeking tattoo services is, " },
        { startTime: 56.7, endTime: 60, text: "to the surprise of many, middle-class suburban women." },
        { startTime: 60.6, endTime: 63.3, text: "The state and local governments of New Jersey, " },
        { startTime: 63.7, endTime: 66, text: "like those of other regions across the United States," },
        { startTime: 66.3, endTime: 69, text: "are being forced to alter their attitude and laws" },
        { startTime: 69.2, endTime: 73.8, text: "in response to the changing cultural status and popularity of tattooing " },
        { startTime: 74, endTime: 78.4, text: "and have now adopted a more open-minded approach to tattoos." },
        { startTime: 79.8, endTime: 82, text: "According to one recent journal," },
        { startTime: 82.1, endTime: 87.3, text: "tattoos were most common among motorcyclists, criminals and gang members. " },
        { startTime: 87.5, endTime: 93.4, text: "However, these stereotypical associations have changed over the past 20 years " },
        { startTime: 93.8, endTime: 99, text: "and it is estimated that almost half of the tattoos now being done are on women." },
      ];
      
      const timeMarkers: TimeMarker[] = [
        { time: 0.1, label: "1", color: "red" },
        { time: 12.8, label: "2", color: "red" },
        { time: 27.2, label: "3", color: "red" },
        { time: 39.2, label: "4", color: "red" },
        { time: 46.7, label: "5", color: "red" },
        { time: 52, label: "6", color: "red" },
        { time: 60.6, label: "7", color: "red" },
        { time: 79.8, label: "8", color: "red" },
        { time: 87.5, label: "9", color: "red" },
    ];
    
  
  return (
    <div className="audio-player">
        {/* <audio ref={audioRef} src={BoysGirls} /> */}
        <WaveformPlayer 
            audioUrl={tattoo} 
            subtitles={subtitles} 
            timeMarkers={timeMarkers}
        />
    </div>
);
  };

export default Player;

// const subtitles = [
//     { startTime: 0.1, endTime: 7.2, text: "The cultural status of tattooing has steadily evolved from that of an anti-social activity in the 1960s" },
//     { startTime: 7.5, endTime: 14, text: "to that of a socially acceptable fashion statement today." },
//     { startTime: 20.5, endTime: 28, text: "And if you walk down the aisles of children's clothes shops, you'll see rows and rows of clothes in these two colors." },
//     { startTime: 28, endTime: 30.8, text: "But where does this rule come from, exactly?"},
//     { startTime: 31, endTime: 36, text: "Are little girls genetically attracted to pink, and little boys to blue?" },
//     { startTime: 36.5, endTime:37.5, text: "It seems not." },
//     { startTime: 38, endTime: 42, text: "You may be surpised to hear that a hundred years ago it was the exact opposite." },
//     { startTime: 42.9, endTime: 50.5, text: "In a popular magazine at the time, an article said: The generally accepted rule is - pink for boys, and blue for girls." },
//     { startTime: 51, endTime: 55.8, text: "The reason is that pink, being a stronger color, is more suitable for a boy" },
//     { startTime: 56, endTime: 60, text: "While blue, which is more delicate, is prettier for a girl." },
//     { startTime: 61, endTime: 66.7, text: "The change to pink for girls and blue for boys happend only after World War 2. " },
//     { startTime: 66.9, endTime: 70, text: "The idea of women being equal to men emerged, " },
//     { startTime: 70.3, endTime: 74, text: "and, as a result, people started dressing little girls in pink." },
//     { startTime: 74.5, endTime: 77, text: "Soon, advertisers got hold of the idea, " },
//     { startTime: 77.5, endTime: 79.5, text: "and made blue the color for boys." },
//     { startTime: 80, endTime: 84, text: "Since then, the pink and blue stereotype has never gone away." },
//     { startTime: 84.5, endTime: 88.7, text: "And it's not only clothes, but all sorts of other things as well." },
//     { startTime: 89, endTime: 92, text: "Girls' rooms and furniture are painted pink." },
//     { startTime: 92.4, endTime: 94.5, text: "Girls' accessories are made in pink," },
//     { startTime: 94.8, endTime: 97, text: "Girls' toys are packaged in pink." },
//     { startTime: 98, endTime: 101.7, text: "South Korean photographer JeongMee Yong was so struck by this," },
//     { startTime: 102, endTime: 104.7, text: "that she created a series of photographs called:" },
//     { startTime: 105, endTime: 109, text: "The Pink and Blue project, where children were photographed in their rooms" },
//     { startTime: 109.3, endTime: 113, text: "with all the things they possessed in either pink or blue." },
//     { startTime: 113.5, endTime: 116.2, text: "But is this something we really need to worry about?" },
//     { startTime: 116.7, endTime: 121.6, text: "Alison Carr, from the Institute of Engineering and Technology, says yes." },
//     { startTime: 122.5, endTime: 127, text: "When we're choosing between one toy or another to buy as a present for a child," },
//     { startTime: 127.5, endTime: 131, text: "we're influenced by stereotypes, and if the child is a girl - " },
//     { startTime: 131.2, endTime: 133.5, text: " - we'll probably choose something pink." },
//     { startTime: 133.7, endTime: 138.5, text: "And this is a problem, because not only are 89% of girls' toys pink," },
//     { startTime: 139, endTime: 143, text: "but also only a very few of them are connected with science or math." },
//     { startTime: 143.4, endTime: 147.5, text: "Most girls' toys are still based on dolls and dressing up," },
//     { startTime: 148, endTime: 152, text: "while boys' toys are more likely to be related to buildings and cars." },
//     { startTime: 153, endTime: 157, text: "And the problem is that the toys we play with influence our interests," },
//     { startTime: 157.5, endTime: 159.5, text: "and even the jobs that we end up getting." },
//     { startTime: 160, endTime: 163.8, text: "If girls don't have access to as many construction toys," },
//     { startTime: 164.1, endTime: 166.5, text: "or mechanical or scientific toys as boys," },
//     { startTime: 167, endTime: 170.7, text: "they'll think that science and technology 'is not for them'," },
//     { startTime: 171, endTime: 174, text: "so they'll be less likely to choose to study it at school" },
//     { startTime: 174.5, endTime: 175.6, text: "and later at university." },
//     { startTime: 176.5, endTime: 179.3, text: "I think that if they were allowed to choose for themselves," },
//     { startTime: 179.5, endTime: 182.6, text: "girls and boys would choose the same sort of toys," },
//     { startTime: 183, endTime: 185.4, text: "and that parents need to forget about the stereotypes," },
//     { startTime: 185.5, endTime: 187, text: "about pink and blue." },
//     { startTime: 187.8, endTime: 190.5, text: "Toys should be the same colours for all children," },
//     { startTime: 191, endTime: 193, text: "red, yellow, green, whatever." },
//     { startTime: 193.7, endTime: 197.5, text: "However, Natasha Crookes, from the British Toy & Hobby Assosiation," },
//     { startTime: 198, endTime: 198.8, text: "doesn't agree." },
//     { startTime: 199.2, endTime: 202.5, text: "'I think that instead of abandoning the pink and blue thing -" },
//     { startTime: 202.6, endTime: 203.5, text: "- we should use it." },
//     { startTime: 204.3, endTime: 207.5, text: "If we want girls to get interested in maths or science," },
//     { startTime: 208, endTime: 211.5, text: "we should package science and engineering toys in a pink box." },
//     { startTime: 212.2, endTime: 216, text: "Then maybe girls - or their parents - will start buying them.'" },
//     { startTime: 216.2, endTime: 219, text: "Thank you, Natasha. And now we're move on to..." },
//   ];

// const timeMarkers = [
//     { time: 0.1, label: "1", color: "#4F4A85" },
//     { time: 13, label: "2", color: "#4F4A85" },
//     { time: 28, label: "3", color: "#4F4A85" },
//     { time: 31, label: "4", color: "#4F4A85" },
//     { time: 36, label: "5", color: "#4F4A85" },
//     { time: 42.5, label: "6", color: "#4F4A85" },
//     { time: 50.9, label: "7", color: "#4F4A85" },
//     { time: 60.8, label: "8", color: "#4F4A85" },
//     { time: 66.7, label: "9", color: "#4F4A85" },
//     { time: 74.5, label: "10", color: "#4F4A85" },
//     { time: 80, label: "11", color: "#4F4A85" },
//     { time: 84, label: "12", color: "#4F4A85" },
//     { time: 89, label: "13", color: "#4F4A85" },
//     { time: 97.6, label: "14", color: "#4F4A85" },
//     { time: 113, label: "15", color: "#4F4A85" },
//     { time: 116.6, label: "16", color: "#4F4A85" },
//     { time: 121.9, label: "17", color: "#4F4A85" },
//     { time: 133.2, label: "18", color: "#4F4A85" },
//     { time: 143.2, label: "19", color: "#4F4A85" },
//     { time: 152.2, label: "20", color: "#4F4A85" },
//     { time: 159.9, label: "21", color: "#4F4A85" },
//     { time: 175.6, label: "22", color: "#4F4A85" },
//     { time: 187.5, label: "23", color: "#4F4A85" },
//     { time: 193, label: "24", color: "#4F4A85" },
//     { time: 199, label: "25", color: "#4F4A85" },
//     { time: 204, label: "26", color: "#4F4A85" },
//     { time: 212, label: "27", color: "#4F4A85" },
//     { time: 216, label: "28", color: "#4F4A85" },
// ];
