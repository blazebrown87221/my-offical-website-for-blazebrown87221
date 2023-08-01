const canvas = document.getElementById("game-container");
const ctx = canvas.getContext("2d");

const GRID_SIZE = 10;
const GRID_WIDTH = canvas.width / GRID_SIZE;
const GRID_HEIGHT = canvas.height / GRID_SIZE;

const snake = {
  body: [{ x: 10, y: 10 }],
  direction: { x: 1, y: 0 },
};

function drawSnake() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";

  for (const segment of snake.body) {
    ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }
}

function updateSnake() {
  const head = { ...snake.body[0] };
  head.x += snake.direction.x;
  head.y += snake.direction.y;
  snake.body.unshift(head);
  snake.body.pop();
}

function mainLoop() {
  updateSnake();
  drawSnake();
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      snake.direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      snake.direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      snake.direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      snake.direction = { x: 1, y: 0 };
      break;
  }
});

setInterval(mainLoop, 100);

