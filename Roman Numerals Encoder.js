//      Training
//      www.codewars.com

/*  Instructions
Create a function taking a positive integer as its parameter and returning a string containing
the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit
and skipping any digit with a value of zero.

In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
                  2008 is written as 2000=MM, 8=VIII; or MMVIII.
                  1666 uses each Roman symbol in descending order: MDCLXVI.

    Example:
solution(1000); // should return 'M'
*/

function solution(number) {
    if (number <= 3999) {
        const romanNumerals = [
            ["M", "MM", "MMM",],
            ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
            ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
            ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        ];

        const arr = number.toString().split("");
        let result = "";
        let diff = 4 - arr.length;
        for (let key in arr) {
            const letter = romanNumerals[+key + diff][arr[key] - 1]
            if (letter) {
                result += letter
            }
        }
        return result
    }
}