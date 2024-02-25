document.getElementById('playButton').addEventListener('click', function() {
    // Redirecionar para a página de desafios ao clicar no botão PLAY
    window.location.href = 'desafios.html';
});

document.getElementById('howToPlayButton').addEventListener('click', function() {
    // Lógica para exibir as orientações do jogo ao clicar no botão "Como Jogar"
    var instructions = "Este é um jogo simples, descubra os enigmas e ganhe pontos para avançar. Cada acerto vale 30 pontos e cada erro custa 30 pontos. Você tem direito a uma única dica por nível com o custo de 20 pontos que pode ser adiquirida no icone inferior direito '?'. Caso você chegue a 0 pontos, você perdeu! Para as respostas são consideradas apenas letras minúsculas sem caracteres especiais ou acentos. Alguns níveis contêm como resposta números.";
    alert(instructions);
});

document.getElementById('contactButton').addEventListener('click', function() {
    // Lógica para redirecionar para a página do Instagram ao clicar no botão "Fale Conosco"
    window.location.href = 'https://www.instagram.com/sean_ptb/';
});
