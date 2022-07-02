// var element = document.querySelector('.test-element')
// console.log(element)
// const sum = (a, b) => a + b
// console.log(sum(3, 4))

// var name = 'Javascript ES6'
// var price = '60000'

// var course = {
//     name,
//     price
// }

// console.log(course)

//===================================Destructuring, rest

// var array = ['Javascript', 'NodeJS', 'PHP']

// var [a, c,] = array
// console.log(a, c)

//----------------------------------------------------

// var object = {
//     name: "java",
//     price: 1000,
//     img: 'image_address'
// }

// var { price, ...rest } = object

// console.log(price);
// console.log(rest)

// const { 
//     a = 'default', 
//     b, 
//     ...rest 
// } = {
//     b: 'val1',
//     c: 'val2',
//     d: 'val3'
// };

// console.log(a, b, rest); // Output: ?


//==============================================Spread operator

// const apiConfig ={
//     name:'danh sách bài tập',
//     source:'facebook.com',
//     other:true
// }

// const otherConfig ={
//     ...apiConfig,
//     name:'danh sách sinh viên',
// }

// console.error(otherConfig)
