// // singleton or COnstructors objects
// 1 method ****************************


// const tinderUser = new Object()    // singleton object

// console.log(tinderUser);

// 2 method //  Non singleTon objects

const tinderUser = {}
 tinderUser.id = "abc123"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser = {
    email: "some@gail.com",
    fullname: {
        userfullname: {
            firstname: "satyam",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "c", 4: "d"}


const obj3 = Object.assign({}, obj1, obj2, obj5)
console.log(obj3);
















