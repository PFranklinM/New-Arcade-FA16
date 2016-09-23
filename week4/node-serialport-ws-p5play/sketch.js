
//create a new socket object
var socket = new WebSocket('ws://localhost:8081');
var buttonVal;
var animatingSprite;

//load your images for sprites in here
function preload() {
  animatingSprite = loadAnimation("assets/asterisk_stretching0001.png", "assets/asterisk_stretching0008.png");
}

function setup() {
  createCanvas(600,600);
  
  //set up callbacks for the socket, defined below
  socket.onopen = openSocket;
  socket.onmessage = showData;
}

//change the background based on the string value coming across socket
function draw() {
  background(255);
  animation(animatingSprite, width/2, height/2);
  
  if (buttonVal === "0") {
    animatingSprite.play();
  } else {
    animatingSprite.stop();
  }
}

//this function
function openSocket() {
  console.log('socket is open');
}

function showData(result) {
  buttonVal = trim(result.data); //clear the whitespace and assign it to buttonVal
  // console.log(buttonVal); //printing out the button data
}