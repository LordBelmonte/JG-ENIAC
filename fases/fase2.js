// FASE 2 - Média
const canvas = document.getElementById("ping");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const paddleWidth = 15;
const paddleHeight = 90;
const leftPaddle = {
  x: 10,
  y: canvas.height / 2 - paddleHeight / 2,
  speed: 6,
  score: 0,
};
const rightPaddle = {
  x: canvas.width - paddleWidth - 10,
  y: canvas.height / 2 - paddleHeight / 2,
  speed: 6,
  score: 0,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 8,
  dx: 0,
  dy: 0,
};

const keys = {};
document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function movePaddles() {
  if (keys["w"] && leftPaddle.y > 0) leftPaddle.y -= leftPaddle.speed;
  if (keys["s"] && leftPaddle.y + paddleHeight < canvas.height) leftPaddle.y += leftPaddle.speed;
  moveRightPaddleAI();
}

function moveRightPaddleAI() {
  const targetY = ball.y - paddleHeight / 2;

  const reactionFactor = 0.12;  // mais rápido que a fase 1
  const errorRange = 15;        // menos erro
  const missChance = 0.05;      // raramente erra de propósito

  let adjustedTarget = targetY;

  if (Math.random() < missChance) {
    adjustedTarget += 60 * (Math.random() > 0.5 ? 1 : -1);
  } else {
    adjustedTarget += (Math.random() - 0.5) * errorRange;
  }

  rightPaddle.y += (adjustedTarget - rightPaddle.y) * reactionFactor;

  if (rightPaddle.y < 0) rightPaddle.y = 0;
  if (rightPaddle.y + paddleHeight > canvas.height)
    rightPaddle.y = canvas.height - paddleHeight;
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // colisão com topo e base
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.dy *= -1;
  }

  // colisão com raquete do jogador
  if (
    ball.x - ball.radius < leftPaddle.x + paddleWidth &&
    ball.y > leftPaddle.y &&
    ball.y < leftPaddle.y + paddleHeight
  ) {
    ball.dx *= -1.05; // acelera a bola a cada batida
    ball.dy *= 1.05;
    ball.x = leftPaddle.x + paddleWidth + ball.radius;
  }

  // colisão com raquete da IA
  if (
    ball.x + ball.radius > rightPaddle.x &&
    ball.y > rightPaddle.y &&
    ball.y < rightPaddle.y + paddleHeight
  ) {
    ball.dx *= -1.05;
    ball.dy *= 1.05;
    ball.x = rightPaddle.x - ball.radius;
  }

  // pontuação
  if (ball.x < 0) {
    rightPaddle.score++;
    resetBall();
  } else if (ball.x > canvas.width) {
    leftPaddle.score++;
    resetBall();
  }
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;

  const initialSpeed = 3.5; // 🔥 velocidade inicial ligeiramente maior

  const angle = Math.random() * Math.PI / 4 - Math.PI / 8;
  const direction = Math.random() > 0.5 ? 1 : -1;

  ball.dx = Math.cos(angle) * initialSpeed * direction;
  ball.dy = Math.sin(angle) * initialSpeed;
}


function drawRoundedPaddle(x, y, width, height, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

function drawScore() {
  ctx.fillStyle = "#fff";
  ctx.font = "60px Arial";
  ctx.textAlign = "center";
  ctx.fillText(`${leftPaddle.score}   ✦   ${rightPaddle.score}`, canvas.width / 2, 300);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoundedPaddle(leftPaddle.x, leftPaddle.y, paddleWidth, paddleHeight, 10, "#6d45c2");
  drawRoundedPaddle(rightPaddle.x, rightPaddle.y, paddleWidth, paddleHeight, 10, "#1b3ae7");

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();

  drawScore();
}

function gameLoop() {
  movePaddles();
  moveBall();
  draw();
  requestAnimationFrame(gameLoop);
}

resetBall();
gameLoop();
