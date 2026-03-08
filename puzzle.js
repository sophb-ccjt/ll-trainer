function escapeRegex(str) {
    if (RegExp.escape != null) {
        return RegExp.escape(str);
    }

    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const charMap = {
    O: '🟨',
    X: '⬛',
    '?': '⬜',
    w: '⬜',
    y: '🟨',
    b: '🟦',
    g: '🟩',
    r: '🟥',
    o: '🟧'
};
const puzzleTypes = Object.keys(caseMap);
const difficulties = {
    easy: 0.5,
    normal: 1,
    hard: 2,
    insane: 4,
}
const difficultyList = Object.keys(difficulties);

const validPieces = escapeRegex(Object.keys(charMap).join(''));
function convertTextToEmojiRep(text) {
    return text
        .replace(/(?<! ) (?! )/g, '')
        .replace(new RegExp(`[${validPieces}]`, 'g'), c => charMap[c]);
}
function coverPattern(pattern, difficultyMultiplier = 1) {
    const coverableRegex = new RegExp(`([${validPieces}])\\*(?:{([01](?:\\.\\d+)?|\\.\\d+)})?`, 'g');

    return pattern.replace(coverableRegex, (_, piece, chance) => {
        // parse chance or default to 0.5
        chance = chance == null ? 0.5 : parseFloat(chance);

        // apply difficulty multiplier
        chance = Math.min(Math.max(chance * difficultyMultiplier, 0), 1);

        return Math.random() < chance ? '?' : piece;
    });
}

function generatePuzzle(type, difficulty = 'normal') {
    if (!puzzleTypes.includes(type))
        throw new TypeError(`Puzzle type "${type}" does not exist, only ${puzzleTypes.map(v => `"${v}"`).join(',')} are valid.`);

    if (!Object.keys(caseMap[type]).length) {
        alert(`The puzzle type "${type}" is unfinished!\nCome back when it's completed.`);
        return;
    }

    if (!difficultyList.includes(difficulty))
        throw new TypeError(`Puzzle difficulty "${difficulty}" does not exist, only ${difficultyList.map(v => `"${v}"`).join(',')} are valid.`);

    const patternMap = caseMap[type];
    const patterns = Object.keys(patternMap);
    // pick random case
    const caseName = patterns[Math.floor(Math.random()*patterns.length)];
    const pattern = patternMap[caseName];
    console.log(pattern)

    const coveredPattern = coverPattern(pattern.pattern, difficulties[difficulty]);

    return {
        textRep: coveredPattern,
        emojiRep: convertTextToEmojiRep(coveredPattern),
        answer: caseName,
        data: pattern
    }
}