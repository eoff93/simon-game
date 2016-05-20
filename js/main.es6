let attempt = [];
let simon = [];
let level = 1;
let index = 0;
let color = '';
let playerTurn = false;
let soundIndex;
let strict = false;

const greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
const sounds = [greenSound, redSound, yellowSound, blueSound];
