//      Training
//      www.codewars.com

/*  Instructions
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.

    Examples
'Pig latin is cool' ==> igPay atinlay siay oolcay
'Hello world !' ==> elloHay orldway !
*/

function pigIt(str) {
    const postfix = str.trim().match(/\s\W/ig)
    const result = str.trim().match(/[a-z]+/ig)
        .map(word => {
            word += word[word.length] = word[0] + "ay"
            return word.slice(1)
        }).join(" ")
    return postfix ? result + postfix : result
}