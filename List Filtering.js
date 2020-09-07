//      Training
//      www.codewars.com

/*  Instructions
In this kata you will create a function that takes a list of non-negative
integers and strings and returns a new list with the strings filtered out.
*/

/*  Example
filter_list([1,'a','b',0,15]) == [1,0,15]
*/

function filter_list(list) {
    return list.filter(element => Number.isInteger(element))
}