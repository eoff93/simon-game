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