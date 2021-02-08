/** parses a sentence and replaces each word with the 
* following: first letter, number of distinct characters 
* between first and last character, and last letter. 
* For example, Smooth would become S3h.  Words are separated 
* by spaces or non-alphabetic characters and these separators
* should be maintained in their original form and location in
* the answer.
*/
//TODO: write file as function to accept an inputted string. 
//      Parse special characters from string and load into array
//      Unload special chars array and place them back into order on result string
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
