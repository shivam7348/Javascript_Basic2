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

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj5)

const obj3 = { ...obj1, ...obj2}
// console.log(obj3);

// when the data came from the database that will show by the array of objects
 const users = [
    {
        id: 1,
        email: 'somw@g,a@gmail.com',

    }
 ]

//  console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // it will show all the values entries and keys and values both inside the enteries

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object de-structure and Json API
 const course = {
 coursename: "js in hindist",
 price: "999",
 courseInstructor: "hitesh",

 }

//  console.log(course.price.length)
  const {courseInstructor: instructor} = course
console.log(instructor);


















