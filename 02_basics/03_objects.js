// two methods to  declare the obects 
// 1. literals =>  2. constructors object => singleton

// SingleTon Object from constructors
// const JsUser = {
//     name:name: "Abhishek",
//     age: 21
// }

// Object.create  // => constructors method 

// Object Literals
const mySym = Symbol("key1")



const JsUser = {
    name: "Abhishek",     // name is string predefined
    "full name": " Hitesh Chaudhary",
    [mySym]: "myKey1",
    age: 21,
    location: "JAunpur",
    email: "sachinmax746@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]


}
// console.log(JsUser["email"])
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(  typeof JsUser.mySym);


JsUser.email = "hiteshchatgpt"
// Object.freeze(JsUser)
JsUser.age = 34
// console.log(JsUser);
// function like a varaiable in objects


JsUser.greetings = function() {
    console.log("Hitesh Js user ")
}

JsUser.greetingsTWo = function() {
    console.log(`Hello USers: ${this.name}`);
}
 console.log(JsUser.greetings());
 console.log(JsUser.greetingsTWo());
console.log(JsUser.greetings())

JsUser.greetingsThree = function () 

