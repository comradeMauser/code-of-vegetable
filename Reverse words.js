//      Training
//      www.codewars.com

/*  Instructions
Complete the function that accepts a string parameter,
and reverses each word in the string.
All spaces in the string should be retained.

    Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    const array = []
    let string = " " + str + " "
    let subString = " "
    let index = 0
    for (let n = 0; n < string.length; n++) {
        if (string[n] === " ") {
            subString += (string.slice(index, n))
            index = n
            array.push(subString.split('').reverse().join(''))
            subString = ""
        }
    }
    return array.join('').trim()
}