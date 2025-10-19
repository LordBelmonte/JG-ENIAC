function atualizarBot(paddle, ball) {
  const centroPaddle = paddle.y + paddle.height / 2;
  const erroAleatorio = Math.random() * 80 - 40;
  const alvoY = ball.y + erroAleatorio;
  const velocidade = 2.5;

  if (centroPaddle < alvoY - 10) {
    paddle.y += velocidade;
  } else if (centroPaddle > alvoY + 10) {
    paddle.y -= velocidade;
  }

  // Limita o paddle à área da tela
  if (paddle.y < 0) paddle.y = 0;
  if (paddle.y + paddle.height > canvas.height)
    paddle.y = canvas.height - paddle.height;
}
