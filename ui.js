const puzzleTypeDropdown = document.getElementById('puzzle-type');
const difficultyDropdown = document.getElementById('difficulty');
const generatePuzzleBtn = document.getElementById('generate-puzzle');

const puzzleDiv = document.getElementById('puzzle');
const puzzleEmojiOutput = document.getElementById('puzzle-emoji');
const puzzleTextOutput = document.getElementById('puzzle-text');

const answerInput = document.getElementById('answer-input');
const answerSubmit = document.getElementById('answer-submit');
const answerLabel = document.getElementById('answer-label');
const answerResult = document.getElementById('answer-result');

const showSolutionBtn = document.getElementById('show-solution');
const solutionDiv = document.getElementById('solution-div');
const solutionAnswer = document.getElementById('solution-answer');
const solutionAlgorithm = document.getElementById('solution-alg');
const nextPuzzleBtn = document.getElementById('next-puzzle');

puzzleTypes.forEach(puzzleType => {
    const option = document.createElement('option');
    option.textContent = puzzleType;
    option.value = puzzleType;
    puzzleTypeDropdown.appendChild(option)
});
puzzleTypeDropdown.value = '2-Look PLL';
difficultyList.forEach(difficulty => {
    const option = document.createElement('option');
    option.textContent = toTitleCase(difficulty);
    option.value = difficulty;
    difficultyDropdown.appendChild(option)
});
difficultyDropdown.value = 'easy';

let currentPuzzle;
generatePuzzleBtn.addEventListener('click', ()=>{
    answerResult.style.display =
        showSolutionBtn.style.display =
        solutionDiv.style.display =
        nextPuzzleBtn.style.display =
        'none';

    showSolutionBtn.ariaDisabled =
        showSolutionBtn.disabled =
        nextPuzzleBtn.ariaDisabled =
        nextPuzzleBtn.disabled =
        true;

    const puzzleType = puzzleTypeDropdown.value;
    const puzzle = currentPuzzle = generatePuzzle(
        puzzleType,
        difficultyDropdown.value
    );

    if (!puzzle) return;

    puzzleEmojiOutput.textContent = puzzle.emojiRep;
    puzzleTextOutput.textContent = puzzle.textRep;
    answerInput.focus();
    answerLabel.textContent = `what is this ${puzzleType}?`
    puzzleDiv.style.display = 'inherit';
});
answerSubmit.addEventListener('click', ()=>{
    function normalize(text) {
        return text
            .trim()
            .toLowerCase()
            .replaceAll(/[- ]/g, '');
    }
    const input = normalize(answerInput.value);

    answerSubmit.ariaDisabled =
        answerSubmit.disabled =
        generatePuzzleBtn.ariaDisabled =
        generatePuzzleBtn.disabled =
        answerInput.ariaDisabled =
        answerInput.disabled =
        true;
    
    showSolutionBtn.ariaDisabled =
        showSolutionBtn.disabled =
        nextPuzzleBtn.ariaDisabled =
        nextPuzzleBtn.disabled =
        false;

    if (input === normalize(currentPuzzle.answer)) {
        answerResult.textContent = 'correct!'
        answerResult.style.color = '#0d0'
    } else {
        answerResult.textContent = `incorrect!`
        answerResult.style.color = '#f00'
    }

    solutionAnswer.textContent = `Answer (Algorithm Name): ${currentPuzzle.answer}`;
    const puzzleAlgs = currentPuzzle.data.algs;
    solutionAlgorithm.textContent = `Algorithm: ${puzzleAlgs[Math.floor(Math.random()*puzzleAlgs.length)]}`;

    showSolutionBtn.style.display =
        nextPuzzleBtn.style.display =
        answerResult.style.display =
        'inherit';
})
nextPuzzleBtn.addEventListener('click', ()=>{
    answerSubmit.ariaDisabled =
        answerSubmit.disabled =
        generatePuzzleBtn.ariaDisabled =
        generatePuzzleBtn.disabled =
        answerInput.ariaDisabled =
        answerInput.disabled =
        false;

    answerInput.value = '';
    showSolutionBtn.textContent = 'show solution';
    generatePuzzleBtn.click();
})
showSolutionBtn.addEventListener('click', ()=>{
    if (showSolutionBtn.textContent.startsWith('show')) {
        solutionDiv.style.display = 'inherit';
        showSolutionBtn.textContent = 'hide solution';
    } else {
        solutionDiv.style.display = 'none';
        showSolutionBtn.textContent = 'show solution';
    }
})
answerInput.addEventListener('keydown', event => {
    const key = event.key === ' ' ? 'space' : event.key.toLowerCase();

    if (key === 'enter') {
        event.preventDefault();
        answerSubmit.click();
    }
});
window.addEventListener('keydown', event => {
    const key = event.key === ' ' ? 'space' : event.key.toLowerCase();
    const unfocused = document.activeElement === document.body;

    if (key === 'escape') {
        document.activeElement.blur();
    }
    if (!unfocused) return;

    switch (key) {
        case 'n':
            event.preventDefault();
            nextPuzzleBtn.click();
            break;

        case 's':
            event.preventDefault();
            showSolutionBtn.click();
            break;

        case 'g':
            generatePuzzleBtn.click();
            break;
    }
})