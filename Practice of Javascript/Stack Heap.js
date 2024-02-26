//  In Stack Memory  (Primitive Data Type are beong used) , Call By Value




// In Heap Memory, {Non Primitive are being used} used   Call by Refrence

let myYotube = "hiteshchoudhary"
let anothername = myYotube

anothername = "chai aur code "

// console.log( myYotube);
// console.log(anothername);

let userOne = {
    email: "user#@google",
    upi: "sachinmax7348@gmail.com"
}

let userTwo = userOne

userTwo.email ="google.com"
console.log(userOne.email);
console.log(userTwo.email);