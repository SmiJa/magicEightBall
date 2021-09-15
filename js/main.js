// create elements.
const mainWrap = document.createElement('div');
const ballWrap = document.createElement('div');
const questionWrap = document.createElement('div');
const questionLabel = document.createElement('label');
const questionInput = document.createElement('input');
const btnWrap = document.createElement('div');
const askBtn = document.createElement('button');

mainWrap.id = 'main-wrap';
ballWrap.id = 'ball-wrap';
questionWrap.id = 'question-wrap';
questionLabel.id = 'question-label'
questionInput.id = 'question-input';
btnWrap.id = 'btn-wrap';

questionLabel.innerText = 'Ask the 8-Ball a question.';
askBtn.innerText = 'Ask';
askBtn.addEventListener('click', askQuestion);

questionInput.type = 'text';

document.body.appendChild(mainWrap);
mainWrap.appendChild(ballWrap);
mainWrap.appendChild(questionWrap);
mainWrap.appendChild(btnWrap);
questionWrap.appendChild(questionLabel);
questionWrap.appendChild(questionInput);
btnWrap.appendChild(askBtn);

