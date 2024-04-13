let gameSpeed = 200;
function handleClick1() {
	alert("Starting Game...");
	let game = setInterval(draw, gameSpeed); // run the draw function every 100ms
	const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const box = 30; // size of each square box
let snake = [{ x: 1 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 19) * box, y: Math.floor(Math.random() * 19) * box };
let score = 0;
let direction = 'right';

    // control the snake
document.addEventListener('keydown', changeDirection);

function changeDirection(event) {
	const keyPressed = event.keyCode;
        if (keyPressed == 37 && direction != 'right') {
            direction = 'left';
        } else if (keyPressed == 38 && direction != 'down') {
            direction = 'up';
        } else if (keyPressed == 39 && direction != 'left') {
            direction = 'right';
        } else if (keyPressed == 40 && direction != 'up') {
            direction = 'down';
        }
}

    // draw elements on canvas
function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw snake
        snake.forEach((segment, index) => {
        	ctx.fillStyle = (index === 0) ? 'green' : 'white';
            	ctx.fillRect(segment.x, segment.y, box, box);
            	ctx.strokeStyle = 'white';
            	ctx.strokeRect(segment.x, segment.y, box, box);
        });

        // draw food
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, box, box);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(food.x, food.y, box, box);

        // move the snake
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === 'right') snakeX += box;
        if (direction === 'left') snakeX -= box;
        if (direction === 'up') snakeY -= box;
        if (direction === 'down') snakeY += box;

        // check if snake eats food
        if (snakeX === food.x && snakeY === food.y) {
            	score++;
		gameSpeed --;
		playSoundScore()
            	food = { x: Math.floor(Math.random() * 19) * box, y: Math.floor(Math.random() * 19) * box };
        } else {
            snake.pop();
        }

        // create new head for snake
        let newHead = {
            x: snakeX,
            y: snakeY
        };

        // game over conditions
        if (snakeX < 0 || snakeX >= canvas.width || snakeY < 0 || snakeY >= canvas.height || collision(newHead, snake)) {
		clearInterval(game);
		alert("Game Over! Your score is: " + score);
        	location.reload(); // reload page
        }

        snake.unshift(newHead);

        // display score
        ctx.fillStyle = 'white';
        ctx.font = '40px Arial';
        ctx.fillText('Score: ' + score, box, box);
}

    // check if snake collides with itself
function collision(head, array) {
        for (let i = 0; i < array.length; i++) {
            	if (head.x === array[i].x && head.y === array[i].y) {
                	return true;
            	}
        }
        return false;
}
}
var Play = document.getElementById('Play');
Play.addEventListener('click', handleClick1); 
var 
function playSoundScore() {
  // Create audio element
  var audio = new Audio('Score.m4a');
  // Play the audio
  audio.play();
}
let isMuted = false;
function toggleMute() {
    // Toggle the mute state
    isMuted = !isMuted;
    
    // Check if muted or not and update button text accordingly
    if (isMuted) {
        // Mute audio
        audio.volume = 0; // Set volume to 0 to mute
        muteButton.textContent = 'Unmute';
    } else {
        // Unmute audio
        audio.volume = 1; // Set volume to 1 for full volume
        muteButton.textContent = 'Mute';
    }
}

function handleClick2() { //again
    alert("Choose a game from the selection below; Click play to launch.");
}
var instruc = document.getElementById('instruc');
instruc.addEventListener('click', handleClick2);
 
function handleClick4() {//again
   toggleMute()
}
var mute = document.getElementById('mute');
mute.addEventListener('click', handleClick4)
