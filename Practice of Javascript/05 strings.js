// let myVar = "hello" +" world"
// console.log(myVar)

const name = "hitesh"
const repCount = 60

// console.log(name + repCount + "value");

// console.log(`Hello my name is ${name} and my repo account is ${repCount}`);

const gameName = new String('hitesh-hc-sc')
// console.log(gameName[0]);
// console.log(gameName.__prot__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

//substring and slice method
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);
// trim remove the spaces
const newStringOne = "  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());   // take the return vale

// .replace
 const url = "https://github.com/shivam7348?tab=overview&from=2023-12-01&to=2023-12-31"
console.log(url.replace('github.com', '@gmail.com'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));











