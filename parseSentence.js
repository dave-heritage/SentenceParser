var sentence = 'smootH words are&hard'

const parseSentence = (sentence) => {
    let result = []
    let splitSentence = sentence.split(/[^A-Za-z]/)
    splitSentence.forEach(function(word) {
        result.push(parseWord(word))
    })
    return result.toString()
}

const parseWord = (word) => {
    let unique = []
    for (let i = 1; i < word.length - 1; i++) {
        if (!unique.includes(word[i])) {
            unique.push(word[i])
        }
    }
    return word[0] + unique.length + word[word.length - 1]
}


console.log(parseSentence(sentence))
