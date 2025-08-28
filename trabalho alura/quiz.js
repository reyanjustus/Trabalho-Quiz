// Respostas corretas para cada pergunta
const correctAnswers = {
    q1: "Bruce Wayne",
    q2: "Gotham City",
    q3: "Coringa",  // Corrigido o nome para 'Coringa'
    q4: "Robin",
    q5: "Selina Kyle (Mulher-Gato)",
    q6: "Batmóvel",
    q7: "Alfred",
    q8: "Eles foram assassinados",
    q9: "Batcaverna",
    q10: "James Gordon"
};

// Função para calcular a pontuação
function checkAnswers() {
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    
    // Loop pelas perguntas para verificar as respostas
    for (let i = 1; i <= 10; i++) {
        const userAnswer = form.querySelector(`input[name="q${i}"]:checked`);
        
        // Verifica se a resposta do usuário está correta
        if (userAnswer && userAnswer.value === correctAnswers[`q${i}`]) {
            score++;
        }
    }

    // Exibe a pontuação no final
    resultDiv.textContent = `Você acertou ${score} de 10 perguntas!`;
}
