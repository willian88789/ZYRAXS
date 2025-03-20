function mostrarPergunta() {
  const select = document.getElementById('tripulacaoAntes');
  const pergunta = document.getElementById('perguntaTripulacao');
  pergunta.style.display = select.value === 'sim' ? 'block' : 'none';
};

const bloqueado = localStorage.getItem('zyraxsBloqueado');
if (bloqueado === 'true') {
  document.getElementById('blocked').style.display = 'block';
} else {
  document.getElementById('form-container').style.display = 'block';
}

document.getElementById('zyraxsForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let pontos = 100;
  const nome = document.getElementById('nome').value;
  const idade = parseInt(document.getElementById('idade').value);
  const script = document.getElementById('script').value;
  
  if (idade < 14) pontos -= 20;
  if (script === "sim") pontos -= 40;
  
  if (pontos < 50) {
    localStorage.setItem('zyraxsBloqueado', 'true');
    alert("Irregularidades encontradas. Você foi bloqueado.");
    location.reload();
  } else {
    document.getElementById('discord-button').style.display = 'block';
  }
});

function entrarNoDiscord() {
  window.open("https://discord.gg/tSvfFmePum", "_blank", "noopener,noreferrer");
}

// Desativar botão direito também no botão
document.getElementById('discord-button').addEventListener('contextmenu', function(e) {
  e.preventDefault();
});