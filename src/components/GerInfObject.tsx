// export const gerundinfinitivesTable = [
//     {
//         Gerund: "Admit, Avoid, Consider, Delay, Deny, Despise, Discuss, Dislike, Enjoy, Fancy, Feel like, Finish, Forgive, Like, Love, Imagine, Hate, Keep, Mention, Mind, Miss, Practise, Prefer, Recommend, Risk, Spend time, Suggest, Stop, Understand",
//         Infinitive: "Afford, Agree, Ask, Decide, Expect, Fail, Forget, Help, Hope, Learn, Need, Offer, Plan, Pretend, Promise, Refuse, Remember, Seem, Try, Want, Would like",
//         "Different meanings": "Forget, Remember, Need, Regret, Stop, Try",
//     }
// ]

export const gerundInfTable = {
    Gerund: {
        description: "Герундий (окончание -ing) используется: В качестве подлежащего, после предлогов, после определённых глаголов",
        verbs: [
        {verb: "Admit", translation: "Признавать", example: "He admitted stealing from the shop."}, 
        {verb: "Avoid", translation: "Избегать", example: "They avoid speaking in public."}, 
        {verb: "Consider", translation: "Подразумевать, думать", example: "Peter considered starting a new business."}, 
        {verb: "Delay", translation: "Откладывать", example: "We delay doing our homework."}, 
        {verb: "Deny", translation: "Отрицать", example: "He said that he denied stealing."},
        {verb: "Despise", translation: "Презирать", example: "He despices watching TV."},
        {verb: "Discuss", translation: "Обсуждать", example: "We discussed meeting the next week."},
        {verb: "Dislike", translation: "Не любить", example: "Sofia dislikes doing exercise."},
        {verb: "Enjoy", translation: "Наслаждаться", example: "I enjoy walking in the park."},
        {verb: "Fancy", translation: "Предпочитать", example: "My family fancies going to the beach"},
        {verb: "Feel like", translation: "Чувствовать (как, что-то сделать...)", example: "Steven felt like biking this evening."},
        {verb: "Finish", translation: "Завершать", example: "She's just finished packing."},
        {verb: "Forgive", translation: "Прощать", example: "He forgave her."},
        {verb: "Like", translation: "Нравиться", example: "Martin likes going to the cinema"},
        {verb: "Love", translation: "Любить", example: "I love playing basketball."},
        {verb: "Imagine", translation: "Представлять", example: "Maria imagined sitting on a beach and drinking cocktails."},
        {verb: "Hate", translation: "Ненавидеть", example: "My class hated doing homework."},
        {verb: "Keep", translation: "Хранить, держать, продолжать", example: "Peter and Maria kept talking about the weather."},
        {verb: "Mention", translation: "Упоминать", example: "George mentioned going to the store, and we agreed."},
        {verb: "Mind", translation: "Быть не против", example: "We didn't mind parking in the city centre."},
        {verb: "Miss", translation: "Скучать, терять", example: "Mom and Dad missed talking to their daughter."},
        {verb: "Practise", translation: "Практиковаться", example: "Paul practises playing board games."},
        {verb: "Prefer", translation: "Предпочитать", example: "Michael prefers seeing friends rather than being at home."},
        {verb: "Recommend", translation: "Рекомендовать", example: "Doctors recommend drinking at least 2 litres of water every day."},
        {verb: "Risk", translation: "Рисковать", example: "They risk being caught on the crime scene."},
        {verb: "Spend time", translation: "Проводить время", example: "Friends spend time talking and drinking in a bar."},
        {verb: "Suggest", translation: "Предлагать", example: "We suggested going to the club."},
        {verb: "Stop", translation: "Останавливаться", example: "Tony stopped cooking and went to bed."},
        {verb: "Understand", translation: "Понимать", example: "She understood playing this game."},
        ]
    },
    Infinitive: {
        description: "Инфинитив - это базовая форма глагола, часто с частицей 'to'. Он используется: После определённых глаголов, после прилагательных, после вопросительных слов, в качестве подлежащего или дополнения, для выражения цели.",
        verbs: [
            {verb: "Afford", translation: "Позволять", example: "He couldn't afford to pay for this car."}, 
            {verb: "Agree", translation: "Соглашаться", example: "Paula agreed to meet with a guy."}, 
            {verb: "Ask", translation: "Спрашивать", example: "The police asked a man to tell them where he was yesterday."}, 
            {verb: "Decide", translation: "Решать", example: "We decided to walk home, and not take the bus."}, 
            {verb: "Expect", translation: "Ожидать", example: "Jessica expected to get an F for her exam, but she got A."},
            {verb: "Fail", translation: "Проваливать", example: "Peter failed to catch the plane, so he had to buy a new ticket."},
            {verb: "Forget", translation: "Забывать", example: "I forgot to buy milk."},
            {verb: "Help", translation: "Помогать", example: "They've helped to carry the stuff to my house."},
            {verb: "Hope", translation: "Надеяться", example: "Tourists hoped to see the famous Eiffel Tower."},
            {verb: "Learn", translation: "Учить", example: "Robert learns to speak French"},
            {verb: "Need", translation: "Нуждаться", example: "Kate needed to go to the dentist."},
            {verb: "Offer", translation: "Предлагать", example: "A businessman offered to sign a good deal."},
            {verb: "Plan", translation: "Планировать", example: "We planned to visit Colliseum in Rome."},
            {verb: "Pretend", translation: "Притворяться", example: "My friends pretended to be ill and they didn't go to school yesterday."},
            {verb: "Promise", translation: "Обещать", example: "He promised to love her forever."},
            {verb: "Refuse", translation: "Отказываться", example: "Tim refused to get help with his project."},
            {verb: "Remember", translation: "Помнить, вспоминать", example: "Fred didn't remember to put the chicken in the freezer."},
            {verb: "Seem", translation: "Казаться", example: "He seemed to be bored."},
            {verb: "Try", translation: "Пытаться", example: "Iris tried to start a business, but failed."},
            {verb: "Want", translation: "Хотеть", example: "Students wanted to go home earlier that day."},
            {verb: "Would Like", translation: "Хотелось бы", example: "We would like to visit Spain one day."},
        ]
    },
    "Ger+Inf": {
        description: "После некоторых глаголов можно использовать как герундий, так и инфинитив, но это иногда может менять значение глагола и предложения.",
        verbs: [
            {verb: "Forget", translation: "Забывать", meaning1: "Forget to do - refers to something you intended to do but didn’t remember.", example1:"I forgot to turn off the light before I left for work.",  meaning2: "Forget doing - refers to something that you’ve done and you can remember doing it.", example2:"Clive couldn’t forget camping on the Mediterranean coast with his friends last summer."}, 
            {verb: "Remember", translation: "Помнить", meaning1: "Remember to do - Something you want to remember before you do the action.", example1:"Don’t worry, I’ll remember to pick you up on my way to work.",  meaning2: "Remember doing - Something you remember after you did the action.", example2:"I remember my grandma telling us stories before bed."}, 
            {verb: "Need", translation: "Нуждаться", meaning1: "Need to do - the subject does the action", example1:"I need to clean my apartment.",  meaning2: "Need doing - there is a passive meaning.", example2:"My apartment needs cleaning."}, 
            {verb: "Stop", translation: "Останавливаться", meaning1: "Stop to do - interrupt one action in order to do something else.", example1:"I stopped to tie my shoelaces.",  meaning2: "Stop doing - give up doing something.", example2:"Mildred stopped eating sugar because she wants to lose weight."}, 
            {verb: "Try", translation: "Пытаться", meaning1: "Try to do - make an effort to do something.", example1:"I’ll try to fix it, but I’m not sure if I’ll be able to.",  meaning2: "Try doing - when you experiment with doing something.", example2:"Adam tried adding some salt, but the soup was still bland."}, 
            {verb: "Regret", translation: "Жалеть", meaning1: "Regret to do - being sorry about something (usually in formal cases).", example1:"We regret to inform you that your application was rejected.",  meaning2: "Regret doing - you wish you had (not) done something.", example2:"I regret not going to university."}
        ]
    }
};