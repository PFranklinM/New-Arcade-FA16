
//create a new socket object
var socket = new WebSocket('ws://localhost:8081');
var buttonVal;

function setup() {
  createCanvas(600,600);
  
  //set up callbacks for the socket, defined below
  socket.onopen = openSocket;
  socket.onmessage = showData;
}

//change the background based on the string value coming across socket
function draw() {
  if (buttonVal === "0") {
    background(255);
  } else {
    background(0);
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