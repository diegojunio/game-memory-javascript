/***
 * List of Game Cards Files name
 */
const cardPictures = [
    "pic-0.webp",
    "pic-1.webp",
    "pic-2.webp",
    "pic-3.webp",
    "pic-4.webp",
    "pic-5.webp",
    "pic-6.webp",
    "pic-7.webp",
    "pic-8.webp",
    "pic-9.webp",
    "pic-10.webp",
    "pic-11.webp",
    "pic-12.webp",
    "pic-13.webp",
    "pic-14.webp",
    "pic-15.webp"
];

/***
 * Host of Game
 */
const HOST = window.location.host;

/***
 * Source folder for Card Images
 */
const cardImageUrl = "/src/images/cardboard/";

/***
 * Source folder for Musics
 */
const musicUrl ="/src/audio/music/";

/***
 * Source folder for Sound Effects
 */
const soundFxUrl = "/src/audio/soundfx";

/**
 * Selector for Game Board ID
 */
var gameMenu = document.getElementById('main-screen');
var gameBoardId = document.getElementById("game-board_board");
var gameBoard = document.getElementById('game-board');
var gameCard = gameBoardId.querySelectorAll('.game-card');
var gameOptions = document.getElementById("game-options");
var gameOver = document.getElementById('game-over');

var volumeControlSoundFx = document.getElementById('soundfx-volume');

var soundFxCardShow = new Audio('src/audio/hover.mp3');
var soundFxError = new Audio('src/audio/error.mp3');
var soundFxMatch = new Audio('src/audio/match.mp3');

cardsPairsAmount = 8;
let cardsMixed = [];



