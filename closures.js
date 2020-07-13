//============ Training  ============

const returnMessage = (message) => {
    const result = "result is: " + message
    return (() => {
        console.debug(result)
    })
}

const attempt1 = returnMessage("attempt1");

console.log("hi");