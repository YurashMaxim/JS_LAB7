document.addEventListener('DOMContentLoaded', function() {
    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('h1');
    title.textContent = 'Magic Ball';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'question';
    input.placeholder = 'Your question...';

    const button = document.createElement('button');
    button.textContent = 'Answer';
    button.addEventListener('click', getAnswer);

    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';

    const magicBall = document.createElement('div');
    magicBall.className = 'magic-ball';

    const answer = document.createElement('div');
    answer.id = 'answer';

    magicBall.appendChild(answer);

    container.appendChild(title);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(errorMessage);
    container.appendChild(magicBall);
    document.body.appendChild(container);

    function getAnswer() {
        const question = input.value.trim();
        if (question === '') {
            errorMessage.textContent = 'Input your question!';
            answer.textContent = '';
        } else {
            errorMessage.textContent = '';
            const answers = ['Yes', 'No', 'Maybe'];
            const Index = Math.floor(Math.random() * answers.length);
            answer.textContent = answers[Index];
        }
    }
});
