// Square Every Digit

/*  Instructions
Welcome. In this kata, you are asked to square every digit of a number
and concatenate them.
Note: The function accepts an integer and returns an integer.

    Example
For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.
*/

function squareDigits(number){
    return parseInt(number.toString().split("").map(el => Math.pow(+el, 2)).join(""))
}

// console.log(squareDigits(9119))
// console.log(squareDigits(4444))

// node "Square Every Digit"
