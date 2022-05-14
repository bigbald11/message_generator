const messages = [
    "Limits exist only in the mind",
    "Some call it obsession, I call it dedication",
    "In order to succeed, we must first believe that we can",
    "Losers quit when they fail. Winners fail until they succed",
    "Without failure success wouldn't taste so sweet",
    "Expect problems and eat them for breakfast",
    "0% Luck, 100% Hustle",
    "No alarm clock needed, my passion wakes me",
    "Last name Hungry, first name Always",
    "If you change the way you look at things, the things you look at will change"
];

const rand = messages[Math.floor(Math.random() * messages.length)];


const message = () => `MOTIVATIONAL MESSAGE OF THE DAY: "${rand}"`;

console.log(message());