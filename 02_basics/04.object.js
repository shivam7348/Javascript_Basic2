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
console.log(regularUser.fullname.userfullname.firstname)








