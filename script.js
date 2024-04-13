function handleClick1() {
    alert("Please Choose a Game from below.");
}
var Play = document.getElementById('Play');
Play.addEventListener('click', handleClick1);

   
function handleClick2() {
    alert("Choose a game from the selection below; Click play to launch.");
        // Add your instructions logic here
}
var instruc = document.getElementById('instruc');
instruc.addEventListener('click', handleClick2);

 
function handleClick4() {
   alert("Nothing to mute");
}
var mute = document.getElementById('mute');
mute.addEventListener('click', handleClick4);
   

let x = 0, y = 0, dirX = 1, dirY = 1;
const speed = 2;
const colour = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
let va = document.getElementById("va");
va.style.backgroundColor = colour[0];
let turn = 0;
var black = document.querySelector('.black-box');
const vaWidth = va.clientWidth;
const vaHeight = va.clientHeight;

function randomColour() {
  const colour = [...colour]
  colour.splice(turn,1)
  const colourIndex = Math.floor(Math.random() * currentPallete.length);
  prevColourIndex = colourIndex<prevColourIndex?colourIndex:colourIndex+1;
  const colour1 = colour[colorIndex];
  return colour1;
}
function animate() {
  const screenHeight = black.clientHeight;
  const screenWidth = black.clientWidth;

  if (y + vaHeight >= screenHeight || y < 0) {
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
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
