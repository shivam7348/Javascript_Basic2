const coding = ['js', 'css','html', 'javascript']
//  coding.forEach( function (val){
//     console.log(val);
//  })

 function printMe(item) {
    // console.log(item);

 }

//  coding.forEach(printMe)


coding.forEach((item, index, arr )=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: 'English',
        langauageFileNmae:"java"
    },

    {
        languageName: 'py',
        langauageFileNmae:"python"
    },

    {
        languageName: 'C++',
        langauageFileNmae:"C programming"
    },
    {
        languageName: 'javascript',
        langauageFileNmae:"js"
    }


    
]
myCoding.forEach( (item) =>{
    console.log(item.languageName); console
 })





// high order function 


