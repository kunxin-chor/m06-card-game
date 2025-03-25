function generateAlphabetPairs() {
    let alphabet = "ABCDEFGHIJK";
    let pairs = [];
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = i + 1; j < alphabet.length; j++) {
            pairs.push(alphabet[i] + alphabet[j]);
        }
    }
    return pairs;
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}