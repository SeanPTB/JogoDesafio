// desafiosjs.js

let currentLevel = 1;
let score = 100;
let hintUsed = false;

const levelHints = {
    1: 'SMS',
    2: '7',
    3: '7 de setembro de 1906',
    // Adicione mais dicas conforme necessário para outros níveis
};

function checkAnswer(level) {
    const userInput = document.getElementById(`userInput${level}`).value.toLowerCase();
    const correctAnswers = {
        1: 'desafio',
        2: 'arco iris',
        3: 'alberto santos dumont',
        // Adicione mais respostas conforme necessário
    };

    if (userInput === correctAnswers[level]) {
        score += 30;
        alert('Parabéns! Você acertou!');
        document.querySelector(`#level${level}`).style.display = 'none';
        goToNextLevel();
    } else {
        score = Math.max(0, score - 30);

        if (score <= 0) {
            alert('Você Perdeu! Tente Novamente :)');
            window.location.href = 'index.html';
        } else {
            alert('Resposta incorreta. Tente novamente!');
        }
    }

    document.querySelector('.score').textContent = `Pontuação: ${score}`;
}

function goToNextLevel() {
    currentLevel++;

    const nextLevelElement = document.querySelector(`#level${currentLevel}`);

    if (nextLevelElement) {
        document.getElementById('levelCounter').textContent = `Nível ${currentLevel}`;
        nextLevelElement.style.display = 'block';
        document.getElementById(`userInput${currentLevel}`).value = '';
    } else {
        alert('Parabéns! Você concluiu todos os níveis.');
        window.location.href = 'index.html';
    }
}

function showHint() {
    if (score >= 20 && !hintUsed) {
        const hint = levelHints[currentLevel];

        if (hint !== undefined) {
            alert(`Aqui está a dica para o Nível ${currentLevel}: ${hint}`);
            score -= 20;
            document.querySelector('.score').textContent = `Pontuação: ${score}`;
            hintUsed = true;
        } else {
            alert('Nenhuma dica disponível para este nível.');
        }
    } else if (hintUsed) {
        alert('Você já comprou a dica para este nível.');
    } else {
        alert('Você não tem saldo suficiente para dicas!');
    }
}



function closeHint() {
    document.getElementById('hintPopup').style.display = 'none';
}

