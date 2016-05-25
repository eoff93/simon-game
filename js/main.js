'use strict';

var attempt = [];
var simon = [];
var level = 1;
var index = 0;
var color = '';
var playerTurn = false;
var soundIndex = void 0;
var strict = false;

var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var sounds = [greenSound, redSound, yellowSound, blueSound];

$('#msg').html('Get ready for Round ' + level);

$('#strict').on('click', function () {
  if (strict === false) {
    strict = true;
    $('#strict-mode').html('Strict mode is ON');
  } else {
    strict = false;
    $('#strict-mode').html('');
  }
});

$('.slice').on('click', function () {
  if (playerTurn) {

    fillAttempt(this);
    animateAndSound(this);

    if (attempt[index] !== simon[index]) {
      wrongChoice();
    } else {

      if (index === simon.length - 1) {
        rightPattern();
      } else if (index !== simon.length - 1) {
        // if right choice but there's more to the pattern
        index++;
      }
    }
  }
});

$('#start').on('click', function () {
  if ($(this).html() === 'Start') {
    $('#msg').html('Round ' + 1);
    simon = [];
    $(this).html('Reset');
    color = slices[Math.floor(Math.random() * (3 + 1))];
    simon.push(color);
    patternBlink(simon);
  } else {
    reset();
  }
});

// Function that animates the pressed slice and plays the sound
function animateAndSound(arg) {
  $(arg).fadeOut(150).fadeIn(150);
  soundIndex = slices.indexOf(color);
  sounds[soundIndex].play();
}

// Gets the color from the pressed slice via #id and then fills an array
function fillAttempt(slice) {
  color = $(slice).attr('id');
  attempt.push(color);
}

// A simple function that outputs a message and disables player clicking when you lose
function lostStrict() {
  $('#msg').html('You lost at Round ' + level + '. Better luck next time!');
  playerTurn = false;
}

// -----------------------------
function wrongChoice() {
  if (strict) {
    lostStrict();
  } else {
    playerTurn = false;
    $('#msg').html('Try again!');
    patternBlink(simon);
    index = 0;
    attempt = [];
  }
}

// If the whole pattern is right
function rightPattern() {
  playerTurn = false;
  attempt = [];
  level++;
  checkVictory(level);
  $('#msg').html('Round ' + level);
  index = 0;
  color = slices[Math.floor(Math.random() * (3 + 1))];
  simon.push(color);
  patternBlink(simon);
}

function patternBlink(simon) {
  setTimeout(function () {
    for (var i = 0; i < simon.length; i++) {
      (function (i) {
        setTimeout(function () {
          soundIndex = slices.indexOf(simon[i]);
          sounds[soundIndex].play();
          $('#' + simon[i]).fadeOut(150).fadeIn(150);
        }, i * 800);
      })(i);
    }
  }, 1000);
  playerTurn = true;
}

function reset() {
  $('#start').html('Start');
  playerTurn = false;
  level = 1;
  $('#msg').html('Get ready for Round ' + level);
  attempt = [];
  simon = [];
  index = 0;
}

function checkVictory(level) {
  if (level === 21) {
    $('#msg').html('YOU DID IT! Great job!');
    playerTurn = false;
  }
}