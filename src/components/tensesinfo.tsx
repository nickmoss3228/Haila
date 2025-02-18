import pastSimpleImg from "../assets/tenses/pastSimple.png";
import pastContinuousImg from "../assets/tenses/pastContinuous.png";
import pastPerfectImg from "../assets/tenses/pastPerfect.png";
import pastPerfectContImg from "../assets/tenses/pastPerfectCont.png";
import presentSimpleImg from "../assets/tenses/presentSimple.png";
import presentContinuousImg from "../assets/tenses/presentContinuous.png";
import presentPerfectImg from "../assets/tenses/presentPerfect.png";
import presentPerfectContImg from "../assets/tenses/presentPerfectCont.png";
import futureSimpleImg from "../assets/tenses/futureSimple.png";
import futureContinuousImg from "../assets/tenses/futureCont.png";
import futurePerfectImg from "../assets/tenses/futurePerfect.png";
import futurePerfectContImg from "../assets/tenses/futurePerfectCont.png";

export const tensesInfo = [
  {
    name: "Past Simple",
    useCase: "Finished actions in the past.",
    img: pastSimpleImg,
    grammar: "Ved / V2 | didn’t + Vinf | Did...+Vinf",
    sentencesPos: "I made a cake yesterday. She cooked dinner for us.",
    sentencesNeg:
      "He wasn’t very nice to me yesterday. She didn’t see the movie last week.",
    sentencesQuest: "Did you clean your room last week?",
    expressions: "yesterday, last week",
  },
  {
    name: "Present Simple",
    useCase: "Regular actions, habits, facts",
    img: presentSimpleImg,
    grammar: "V / V+s (3rd person) | don’t - doesn’t + Vinf | Do...? Does..?",
    sentencesPos:
      "My friends always go out on Friday evening. She does housework every day.",
    sentencesNeg: "They don’t watch TV. Peter doesn’t play videogames.",
    sentencesQuest: "Do you like watching TV? Does Sheila go to the park?",
    expressions:
      "Always, often, usually, sometimes, hardly ever, never, every day",
  },
  {
    name: "Future Simple",
    useCase:
      "Actions that are expected in the future, predictions, offers, promises.",
    img: futureSimpleImg,
    grammar: "Will + Vinf",
    sentencesPos: "I will go to the store later.",
    sentencesNeg: "She won't read the book tonight.",
    sentencesQuest: "Will they finish their homework before dinner?",
    expressions:
      "next (week, month, year), tomorrow, in X's time (amount of time)",
  },
  {
    name: "Past Continuous",
    useCase:
      "An action that is finished in the past and continued for some time.",
    img: pastContinuousImg,
    grammar: "was/were + Ving",
    sentencesPos: "I was studying English when my wife came home from work.",
    sentencesNeg:
      "They weren’t paying attention when the teacher asked them a question.",
    sentencesQuest: "Was she playing tennis yesterday at 2PM?",
    expressions:
      "When, While, As, All night yesterday, This time yesterday, Yesterday evening",
  },
  {
    name: "Present Continuous",
    useCase: "Now, at the moment, future arrangements",
    img: presentContinuousImg,
    grammar: "be + Ving",
    sentencesPos: "We’re watching TV at the moment. ",
    sentencesNeg: "Sheila’s making a cake today.",
    sentencesQuest: "Is Gabriel planning to visit?",
    expressions: "now, at the moment, today, this month, this year",
  },
  {
    name: "Future Continuous",
    useCase: "Action in the progress in the future",
    img: futureContinuousImg,
    grammar: "Will be + Ving",
    sentencesPos: "I will be studying for my test at 6pm tonight.",
    sentencesNeg: "You will not be driving the car this evening.",
    sentencesQuest: "Will she be taking her lesson in music in the morning?",
    expressions:
      "at 7 o'clock,  in a week, this time tomorrow, from ... till / from ... to, all day, all night ",
  },
  {
    name: "Past Perfect",
    useCase: "An action that happened before an action in the past.",
    img: pastPerfectImg,
    grammar: "had/hadn’t + V3",
    sentencesPos: "I had finished my homework before she arrived.",
    sentencesNeg: "She hadn't studied hard for the test, but she still passed.",
    sentencesQuest: "Had I played tennis before she arrived?",
    expressions: "before, after, when, once, until, already, never, just",
  },
  {
    name: "Present Perfect",
    useCase: "Recent events, Past experiences, Unfinished actions",
    img: presentPerfectImg,
    grammar: "have/has + V3",
    sentencesPos: "He’s been to Italy 3 times",
    sentencesNeg: "She hasn’t read the book yet.",
    sentencesQuest: "Have they watched this new movie?",
    expressions: "for/since, already (+), just (+), yet (-, ?)",
  },
  {
    name: "Future Perfect",
    useCase:
      "An event that is expected or planned to happen before a time of reference in the future",
    img: futurePerfectImg,
    grammar: "Will have + V3",
    sentencesPos:
      "By the time she arrives at 3 pm, I will have cleaned the entire house.",
    sentencesNeg:
      "She won't have cleaned the room by 5 pm tomorrow, she'll be busy.",
    sentencesQuest: "Will she have completed her Europe tour by next month?",
    expressions:
      "before, till / until, by this time, by 5 p.m., in a month / year",
  },
  {
    name: "Past Perfect Continuous",
    useCase:
      "Something started in the past and continued up until a point in the past",
    img: pastPerfectContImg,
    grammar: "had been + Ving",
    sentencesPos: "I had been working on my computer for three hours.",
    sentencesNeg: "He had not been playing tennis for one hour.",
    sentencesQuest: "How long had she been taking care of her sick uncle?",
    expressions: "since last month, before, until, all morning",
  },
  {
    name: "Present Perfect Continuous",
    useCase: "Actions started in the past and are in progress now",
    img: presentPerfectContImg,
    grammar: "have/has been + Ving",
    sentencesPos: "I’ve been watching this show for more than 10 years now.",
    sentencesNeg: "They haven’t been playing football for 1 hour already",
    sentencesQuest: "Have you been washing the clothes?",
    expressions: "for/since",
  },
  {
    name: "Future Perfect Continuous",
    useCase:
      "An action that will be continuing until a certain point of time in the future",
    img: futurePerfectContImg,
    grammar: "Will have been + Ving",
    sentencesPos: "I'll have been working here for ten years when I retire.",
    sentencesNeg: "We won't have been staying at home by the end of this year.",
    sentencesQuest: "Will they have been living in this house for 15 years?",
    expressions: "when, before, till, until, all morning, the whole evening",
  },
];
