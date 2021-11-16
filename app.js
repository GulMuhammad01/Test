// let myArray = [];

// let courseDetails = {
//     courseName: "Web development course",
//     totalStudents: 10,
//     companyName: "North Aims tecnology",
//     classTimming: "4pm",
//     totalWeeks: 13,
//     topics: ["HTML, CSS and Javascript"]
// }
// // console.log(courseDetails)

// let array = myArray.unshift(courseDetails)
// console.log(array)

// let coursedata = `Our course name is ${myArray[0].courseName}. There are ${myArray[0].totalStudents} students in class. Our company name is ${myArray[0].companyName}. Our class timming is start from ${myArray[0].classTimming}. 
// Our course period is for ${myArray[0].totalWeeks} weeks. The topics are ${myArray[0].topics}.`

// let courseDetailsA = prompt(`Enter your course details`).toLowerCase();
// if 
// (courseDetailsA === myArray[0].courseName.toLowerCase())
// alert(coursedata)
 



// Calculator
let num1 = parseInt(prompt("Enter the First Number"))
let operand = prompt(`Enter an operator`)
let num2 = parseInt(prompt("Enter the Second Number"))

if (operand === `+`)
alert(`The sum of num1 and num2 is equal to ${num1 + num2}`);

if (operand === `-`)
alert(`The subtraction of num1 and num2 is equal to ${num1 - num2}`)

if  (operand === `*`)
alert(`The multiplication of num1 and num2 is equal to ${num1 * num2}`)

if  (operand === `/`)
alert(`The division of num1 and num2 is equal to ${num1 / num2}`)

if  (operand === `%`)
alert(`The percentage of num1 and num2 is equal to ${num1 % num2}`)