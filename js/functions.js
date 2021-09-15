function randNum(num) {
    let selection = Math.floor((Math.random() * num));
    // console.log(`Random num: ${selection}`);
    return selection;
}

function getAnswer(num){
    let selection = randNum(num);
    return types[selection][randNum(types[selection].length)];
}

function askQuestion() {
    let answer = getAnswer(types.length);

    if (questionInput.value === "") {
        alert("Please be sure to ask a question.");
    }
    // console.log(types[0][4]);
    answerBox.classList.add('animate');
    questionInput.value = "";
    setTimeout(() => {answerBox.classList.remove('animate')}, 3100)
    
    return answerBox.innerText = answer;
}
