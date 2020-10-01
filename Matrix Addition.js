//      Training
//      www.codewars.com

/*  Instructions
Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two.
Both matrices being passed into the function will be of size N x N (square), containing only integers.

    Example
matrixAddition(
  [ [1, 2, 3],      [ [2, 2, 1],          [ [3, 4, 4],
    [3, 2, 1],   +    [3, 2, 3],     =      [6, 4, 4],
    [1, 1, 1] ],      [1, 1, 3] ] )         [2, 2, 4] ]
 */

function matrixAddition(first, second) {
    // const array = first.flat().concat(second.flat()) ==> flat() doesn't work on Codewars
    const array = [...first.join().split(","), ...second.join().split(",")].map(el => parseInt(el))
    const subArray = array.map((item, index) => array[index] + array[first.length ** 2 + index])
        .filter(item => item)
    const result = []
    for (let n = 0; n < first.length; n++) {
        result.push(subArray.splice(0, first.length))
    }
    return result
}