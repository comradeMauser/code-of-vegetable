//      Training
//      www.codewars.com

/*  Instructions
Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

    Examples
humanReadable(0)      => '00:00:00',
humanReadable(5)      => '00:00:05',
humanReadable(60)     => '00:01:00',
humanReadable(86399)  => '23:59:59',
humanReadable(359999) => '99:59:59'.
*/

function humanReadable(seconds) {
    let HH = Math.trunc(seconds / 3600)
    let MM = Math.trunc((seconds % 3600) / 60)
    let SS = Math.trunc(((seconds % 3600) % 60))

    function concatZero(value) {
        return value.toString().length === 2 ? value.toString() : "0" + value.toString()
    }

    HH = concatZero(HH)
    MM = concatZero(MM)
    SS = concatZero(SS)
    return `${HH}:${MM}:${SS}`
}