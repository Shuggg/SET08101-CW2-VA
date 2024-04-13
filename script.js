function handleClick1() { //create function
    alert("Please Choose a Game from below."); //alert user to choose when executed
}
var Play = document.getElementById('Play'); //set variable from css elemnt
Play.addEventListener('click', handleClick1); //add listener to execute function on click

function handleClick2() { //again
    alert("Choose a game from the selection below; Click play to launch.");
}
var instruc = document.getElementById('instruc');
instruc.addEventListener('click', handleClick2);
 
function handleClick4() {//again
   alert("Nothing to mute");
}
var mute = document.getElementById('mute');
mute.addEventListener('click', handleClick4);
   
//setting variables, constants, arrays...
let x = 0, y = 0, dirX = 1, dirY = 1;//position and direction
const speed = 2;
const colour = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];//colour array, could add more but meh
let va = document.getElementById("va");// grab css element
va.style.backgroundColor = colour[0]; //attach colour array to element
let turn = 0; 
var black = document.querySelector('.black-box');// grab css element
const vaWidth = va.clientWidth;
const vaHeight = va.clientHeight;// size

function randomColour() { 
  const colour1 = [...colour]//transferring colour array
  colour1.splice(turn,1) //change colour array
  const colourIndex = Math.floor(Math.random() * currentPallete.length);// choose number in array
  turn = colourIndex<turn?colourIndex:colourIndex+1;// increment turn
  const colour2 = colour1[colorIndex];
  return colour2;
}
function animate() {
  const screenHeight = black.clientHeight;
  const screenWidth = black.clientWidth;

  if (y + vaHeight >= screenHeight || y < 0) { // if va goes to border, change direction and colour
    dirY *= -1;
    va.style.backgroundColor = randomColour();
  }
  if (x + vaWidth >= screenWidth || x < 0) {
    dirX *= -1;

    dvd.style.backgroundColor = randomColour();
  }
  x += dirX * speed;
  y += dirY * speed; 
  va.style.left = x + "px";
  va.style.top = y + "px";
  window.requestAnimationFrame(animate);// move va
}

window.requestAnimationFrame(animate); //start
// below is the original, cool idea
//https://codepen.io/RobotWizard/pen/rRVKVa
