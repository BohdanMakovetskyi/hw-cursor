export default function(string) {
    let badWords = ['shit', 'fuck'];
    let arrayWords = string.split(' ');
    for(let i = 0; i < badWords.length; i++) {
        arrayWords = arrayWords.map((value) => {
            return value.replace(badWords[i], '*'.repeat(badWords[i].length));
        });
    }
    return arrayWords.join(' ');
}