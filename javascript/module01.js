document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');

    sidebarToggle.addEventListener('mouseenter', function () {
        sidebar.classList.add('visible');
    });

    sidebarToggle.addEventListener('mouseleave', function () {
        sidebar.classList.remove('visible');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const correctAnswers = ['a', 'b', 'a', 'c', 'a'];
        let score = 0;

        for (let i = 0; i < correctAnswers.length; i++) {
            const question = form['q' + (i + 1)];
            const selectedAnswer = [...question].find(input => input.checked);
            if (selectedAnswer && selectedAnswer.value === correctAnswers[i]) {
                score++;
            }
        }

        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.textContent = `Você acertou ${score} de ${correctAnswers.length} perguntas!`;
        form.appendChild(resultDiv);
    });
});
function readPage() {
    const bodyText = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(bodyText);

    utterance.lang = 'en-US'; 
    utterance.pitch = 1; 
    utterance.rate = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
}
