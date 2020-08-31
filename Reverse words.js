

function reverseWords(str) {
    const array = []
    let subString = ""
    let index = 0
    for (let n = 0; n < str.length; n++) {

        if (str[n] === " ") {

            subString += (str.slice(index, n))
            index = n
            // console.log(str.slice(index, n))
            array.push(subString.split('').reverse().join(''))
            subString = ""
        }

    }
    return array.join('').trim()
}

reverseWords(str)