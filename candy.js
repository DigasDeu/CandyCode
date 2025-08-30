const video = document.getElementById('splashVideo');

// Quando o vídeo terminar
video.onended = () => {
  // Faz o fade-out
  document.getElementById('splash').style.opacity = 0;

  setTimeout(() => {
    // Redireciona para a página principal do Candy Code
    window.location.href = "index.html"; 
    // 👆 aqui você coloca o link da página principal (pode ser index.html, home.html ou até uma rota completa tipo "/site-principal")
  }, 1000); // tempo do fade
};
