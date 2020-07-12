//============ Training  ============
//============ (learnJavascript) ============

//============ Types 1
console.log("O:", typeof 0);
console.log("'string':", typeof "string");
console.log("true:", typeof true);
console.log("[]", typeof []);
console.log("{}", typeof {});
console.log("Symbol('Symbol')", typeof Symbol('Symbol'));
console.log("undefined:", typeof undefined);

console.log("null", typeof null);
console.log("Math:", typeof Math);
console.log("10n:", typeof 10n);
console.log("Map:", typeof Map);

//============ Types 2
document.write('"10"/"3":', "10" / "3");

let a = 1;
let b = 1;

let c = a++; //postfix form
let d = ++b; //prefix form

console.debug("a: ", a, "b: ",b); //2 2
console.debug("c: ", c, "d: ",d); //1 2