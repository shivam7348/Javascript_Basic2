// console.log("")

function sayName() {
    console.log("hello");
    console.log("world");
}

sayName()    // refrence(execution)
// basisc function 
function addTwoNumbers(num1, num2) {    // parameters
     console.log("Shivam")
    return num1 + num2
   
}
 const result = addTwoNumbers(2, 5)
 console.log(result);

 //////////////////
 


 function loginUserMessage(username) {

    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username}just logged in`

 }
//  console.log(loginUserMessage("shivam"));






 function calculationPrice( val1, val2, ...num1){
    return  num1
}
// console.log(calculationPrice(200, 400, 500));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}and price is ${anyObject.price}`);
}

handleObject(user)












