function reverseWords(sentence) {
    const words = sentence.split(' ');
    console.log(words, 1);

    function reveseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--){
            reversed += word[i];
        }
        console.log(reversed, 2)
        return reversed;
    }

    const reversedWords = words.map(reveseWord);
    console.log(reversedWords, 3);

    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence, 4);