
let quotes = document.querySelector("p");
let button = document.querySelector(".clickHere");
let mixx = document.querySelector("#mix")
let motivation = document.querySelector("#motivation")
let emotion = document.querySelector("#emotion")
let life = document.querySelector("#life")
let love = document.querySelector("#love")


alert("First Select Type Of Quotes")


let mix = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Don’t limit your challenges. Challenge your limits.",
    "You are never too old to set another goal or to dream a new dream.",
    "No matter how hard it gets, keep going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Start where you are. Use what you have. Do what you can.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "If you can dream it, you can do it.",
    "The best way to predict the future is to create it.",
    "In the end, we only regret the chances we didn't take.",
    "Believe you can and you're halfway there.",
    "Sometimes you will never know the value of a moment until it becomes a memory.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "It's not the years in your life that count, it's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Act as if what you do makes a difference. It does.",
    "Happiness is not something ready made. It comes from your own actions.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your time is limited, don't waste it living someone else's life.",
    "You only live once, but if you do it right, once is enough.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "The best revenge is massive success.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "The only person you are destined to become is the person you decide to be.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "When one door of happiness closes, another opens.",
    "Life is ten percent what happens to us and ninety percent how we respond to it.",
    "The only journey is the one within.",
    "Act as if what you do makes a difference. It does.",
    "The only way to do great work is to love what you do",
    "In the end, we will remember not the words of our enemies, but the silence of our friends",
    "Life is what happens when you're busy making other plans",
    "The best way to predict the future is to create it",
    "You miss 100% of the shots you don’t take",
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Life is really simple, but we insist on making it complicated.",
    "May you live all the days of your life.",
    "Life itself is the most wonderful fairy tale.",
    "Do not let making a living prevent you from making a life.",
    "Life is ours to be spent, not to be saved.",
    "Keep calm and carry on.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "Life is made of ever so many partings welded together.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The unexamined life is not worth living.",
    "Turn your wounds into wisdom.",
    "The way to get started is to quit talking and begin doing.",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    "Life is not a problem to be solved, but a reality to be experienced.",
    "The best way to predict your future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Live in the sunshine, swim the sea, drink the wild air.",
    "Don't cry because it's over, smile because it happened.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Life is short, and it's up to you to make it sweet.",
    "The longer I live, the more I realize that attitude is the only difference between success and failure.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "The journey of a thousand miles begins with one step",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Believe you can and you're halfway there",
    "The only limit to our realization of tomorrow is our doubts of today",
    "The purpose of our lives is to be happy",
    "It does not matter how slowly you go as long as you do not stop",
    "Happiness is not something ready-made. It comes from your own actions",
    "In the middle of difficulty lies opportunity",
    "Don’t watch the clock; do what it does. Keep going",
    "The only person you are destined to become is the person you decide to be",
    "Go confidently in the direction of your dreams. Live the life you have imagined",
    "Success usually comes to those who are too busy to be looking for it",
    "You must be the change you wish to see in the world",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us",
    "Don’t judge each day by the harvest you reap but by the seeds that you plant",
    "The best time to plant a tree was 20 years ago. The second-best time is now",
    "It is never too late to be what you might have been",
    "Dream big and dare to fail",
    "The way to get started is to quit talking and begin doing",
    "Act as if what you do makes a difference. It does",
    "If you can dream it, you can do it",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle",
    "We may encounter many defeats but we must not be defeated",
    "Perseverance is not a long race; it is many short races one after the other",
    "Do what you can, with what you have, where you are",
    "Love is composed of a single soul inhabiting two bodies.",
    "The best thing to hold onto in life is each other.",
    "To love and be loved is to feel the sun from both sides.",
    "Love does not dominate; it cultivates.",
    "The greatest happiness of life is the conviction that we are loved.",
    "Love recognizes no barriers.",
    "There is no remedy for love but to love more.",
    "Love is when the other person's happiness is more important than your own.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "Love is the only force capable of transforming an enemy into a friend.",
    "True love is eternal, infinite, and always like itself.",
    "Where there is love, there is life.",
    "Love is a friendship set to music.",
    "Love is the bridge between you and everything.",
    "Love is the flower you've got to let grow.",
    "Love isn't something you find. Love is something that finds you.",
    "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    "The best love is the kind that awakens the soul and makes us reach for more.",
    "To be brave is to love someone unconditionally without expecting anything in return.",
    "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
    "Love is a better teacher than duty.",
    "There is always some madness in love. But there is also always some reason in madness.",
    "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
    "The heart has its reasons which reason knows not.",
    "We are most alive when we're in love.",
    "Love will find a way through paths where wolves fear to prey.",
    "A loving heart is the truest wisdom.",
    "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    "Love is an endless act of forgiveness.",
    "To love and be loved is to feel the sun from both sides.",
    "If opportunity doesn’t knock, build a door",
    "Strive not to be a success, but rather to be of value",
    "Success is how high you bounce when you hit bottom",
    "It always seems impossible until it’s done",
    "Keep your face always toward the sunshine—and shadows will fall behind you",
    "To handle yourself, use your head; to handle others, use your heart",
]


let motivationalQuotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Don’t limit your challenges. Challenge your limits.",
    "You are never too old to set another goal or to dream a new dream.",
    "No matter how hard it gets, keep going.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Start where you are. Use what you have. Do what you can.",
    "Your time is limited, don't waste it living someone else's life.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "If you can dream it, you can do it.",
    "Act as if what you do makes a difference. It does.",
]


let emotionalQuotes = [
    "The best way to predict the future is to create it.",
    "In the end, we only regret the chances we didn't take.",
    "Believe you can and you're halfway there.",
    "Sometimes you will never know the value of a moment until it becomes a memory.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "It's not the years in your life that count, it's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Act as if what you do makes a difference. It does.",
    "Happiness is not something ready made. It comes from your own actions.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Your time is limited, don't waste it living someone else's life.",
    "You only live once, but if you do it right, once is enough.",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "The best revenge is massive success.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "The only person you are destined to become is the person you decide to be.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "When one door of happiness closes, another opens.",
    "Life is ten percent what happens to us and ninety percent how we respond to it.",
    "The only journey is the one within.",
]


let lifeQuotes = [
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Life is really simple, but we insist on making it complicated.",
    "May you live all the days of your life.",
    "Life itself is the most wonderful fairy tale.",
    "Do not let making a living prevent you from making a life.",
    "Life is ours to be spent, not to be saved.",
    "Keep calm and carry on.",
    "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    "Life is made of ever so many partings welded together.",
    "Your time is limited, so don't waste it living someone else's life.",
    "The unexamined life is not worth living.",
    "Turn your wounds into wisdom.",
    "The way to get started is to quit talking and begin doing.",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
    "Life is not a problem to be solved, but a reality to be experienced.",
    "The best way to predict your future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "Live in the sunshine, swim the sea, drink the wild air.",
    "Don't cry because it's over, smile because it happened.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Life is short, and it's up to you to make it sweet.",
    "The longer I live, the more I realize that attitude is the only difference between success and failure.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
]


let loveQuotes = [
    "Love is composed of a single soul inhabiting two bodies.",
    "The best thing to hold onto in life is each other.",
    "To love and be loved is to feel the sun from both sides.",
    "Love does not dominate; it cultivates.",
    "The greatest happiness of life is the conviction that we are loved.",
    "Love recognizes no barriers.",
    "There is no remedy for love but to love more.",
    "Love is when the other person's happiness is more important than your own.",
    "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "Love is the only force capable of transforming an enemy into a friend.",
    "True love is eternal, infinite, and always like itself.",
    "Where there is love, there is life.",
    "Love is a friendship set to music.",
    "Love is the bridge between you and everything.",
    "Love is the flower you've got to let grow.",
    "Love isn't something you find. Love is something that finds you.",
    "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    "The best love is the kind that awakens the soul and makes us reach for more.",
    "To be brave is to love someone unconditionally without expecting anything in return.",
    "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
    "Love is a better teacher than duty.",
    "There is always some madness in love. But there is also always some reason in madness.",
    "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.",
    "The heart has its reasons which reason knows not.",
    "We are most alive when we're in love.",
    "Love will find a way through paths where wolves fear to prey.",
    "A loving heart is the truest wisdom.",
    "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    "Love is an endless act of forgiveness.",
    "To love and be loved is to feel the sun from both sides.",
]





// Mix Quotes
function showMix(index) {
    button.addEventListener('click', function() {
        quotes.innerHTML = mix[Math.floor(Math.random() * mix.length)]
    });
}

mixx.addEventListener('click', function() {
    showMix();
});


// Motivational Quotes
function showMotivation(index) {
    button.addEventListener('click', function() {
        quotes.innerHTML = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    });
}

motivation.addEventListener('click', function() {
    showMotivation();
});


// Emotional Quotes
function showEmotional(index) {
    button.addEventListener('click', function() {
        quotes.innerHTML = emotionalQuotes[Math.floor(Math.random() * emotionalQuotes.length)]
    });
}

emotion.addEventListener('click', function() {
    showEmotional();
});


// Life Quotes
function showLife(index) {
    button.addEventListener('click', function() {
        quotes.innerHTML = lifeQuotes[Math.floor(Math.random() * lifeQuotes.length)]
    });
}

life.addEventListener('click', function() {
    showLife();
});


// Love Quotes
function showLove(index) {
    button.addEventListener('click', function() {
        quotes.innerHTML = loveQuotes[Math.floor(Math.random() * loveQuotes.length)]
    });
}

love.addEventListener('click', function() {
    showLove();
});
