//============ Training  ============

const returnMessage = (message) => {
    const result = "result is: " + message;
    return (() => {
        console.debug("closure console", result)
    })
};

const attempt1 = returnMessage("attempt1");
attempt1();


const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.debug(`fib[${i}] = ${fib[i]}`)
    }, 1000)
}

console.error("==============");


for (let i = 0; i < fib.length; i++) {
    setTimeout(() => {
        console.debug(`fib[${i}] = ${fib[i]}`)
    }, 1000)
}

