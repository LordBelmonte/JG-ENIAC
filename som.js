// 🔊 Som de colisão
const somColisao = new Audio("colisao.wav");
somColisao.preload = "auto";

// 🔊 Música da campanha
const musicaCampanha = new Audio("musica.mp3");
musicaCampanha.preload = "auto";
musicaCampanha.volume = 0.4;
musicaCampanha.loop = true; // ← Faz a música repetir automaticamente

// 🔁 Função chamada ao clicar em "Campanha"
function liberarAudio() {
  somColisao.play();
  somColisao.pause();

  // Só toca se o som estiver ativado
  if (somAtivo) {
    musicaCampanha.play().catch((err) => {
      console.warn("Erro ao tocar a música da campanha:", err);
    });
  }
}

function mostrarOpcoes() {
  // Oculta o menu principal e mostra o de opções
  document.querySelector("ul").style.display = "none";
  document.getElementById("menu-opcoes").style.display = "block";
}

function voltarMenu() {
  // Volta para o menu principal
  document.querySelector("ul").style.display = "block";
  document.getElementById("menu-opcoes").style.display = "none";
}

let somAtivo = true; // Começa com som ligado

function alternarSom() {
  const botaoSom = document.getElementById("botaoSom");

  if (somAtivo) {
    // Desativa o som
    musicaCampanha.pause();
    musicaCampanha.currentTime = 0;
    botaoSom.textContent = "🔇 Som";
  } else {
    // Ativa o som
    musicaCampanha.play().catch(() => {});
    botaoSom.textContent = "🔊 Som";
  }

  somAtivo = !somAtivo;
}


