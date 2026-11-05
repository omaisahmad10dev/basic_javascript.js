// Event Listeners
let button = document.querySelector("#btn");

if (button) {
  button.addEventListener("click", function (hello) {
    console.log(hello.target);
    button.innerHTML = "<h1><i>click me</i></h1>";
  });

  button.addEventListener("click", function (hello) {
    console.log(hello.type);
  });
}

// Form Submit
let formBtn = document.querySelector("#button");
if (formBtn) {
  formBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("button submit");
  });
}

// DOM Nodes & Selection
let divElement = document.querySelector("#div");
if (divElement) {
  console.log(divElement.innerHTML);
  console.log(divElement.innerText);
}

let students = document.querySelectorAll(".student");
students.forEach(function (student) {
  student.innerText = "Hello";
});

// Class Check
let buttons = document.querySelector(".btn");
if (buttons && buttons.classList.contains("btn")) {
  buttons.innerText = "active";
}

// Image & Link attributes
let image = document.querySelector("#myImage");
let link = document.querySelector("#myLink");
if (image) {
  image.setAttribute("src", "new.jpg");
  image.setAttribute("alt", "New Image");
}
if (link) {
  link.setAttribute("href", "https://example.com");
}

// Inputs & Math operations
let inputElement = document.querySelector(".inputElement");
if (inputElement) {
  inputElement.value = "34";
  let addNumber = inputElement.value;
  let sumNumber = Number(addNumber);
  console.log(sumNumber + 1);
}

// Array Methods
let arr = [1, 2, 3, 4, 5, 6];
let result = arr.find((item) => item > 5);
console.log(result);

let numbers = [1, 3, 4, 65, 6, 4];
let results = numbers.filter((num) => num > 3);
console.log(results);

// Loop & Logic
let arra = [2, 5, 8, 11, 14, 17, 20];
let count = 0;
for (let i = 0; i < arra.length; i++) {
  if (arra[i] % 2 === 0) {
    count++;
  }
}
console.log("Even count:", count);

// Objects & Spread
let user = {
  name: "Ali",
  address: { city: "Lahore" },
};
let copy = {
  ...user,
  address: { ...user.address },
};
copy.address.city = "Karachi";

// Spread Array Combine
let spread = [1, 2, 3, 5, 6, 7];
let operator = [6];
let output = [...spread, ...operator];
console.log(output);

// Creating DOM Elements
const heading = document.createElement("h1");
heading.textContent = "Hello";
document.body.appendChild(heading);

const textBold = document.createElement("b");
textBold.textContent = "hello";
document.body.appendChild(textBold);

// Basic Input Validation
const namess = document.querySelector("#name");
if (namess) {
  namess.value = "";
  if (namess.value.trim() === "") {
    console.log("name is required");
  }
}

// callback full concept?

// function sayBye() {
//   console.log("bye!")
// }
// function great(callback) {
//   console.log("hello")
//   callback();
//   console.log("welcome")
// }
// great(sayBye)
// ======

// function name(callback) {
//   console.log("hellos")
//   callback();
// }
// name(function omais() {
//   console.log("omais")
// })

// ====
function sayBaye() {
  console.log("hellossssss");
}
function great() {
  console.log("welcome");
}
great(sayBaye());

// +++++++++++++++++++++++++++
// Promise concept

// let myPromise = new Promise((resolve, reject) => {
//   reject("Network Error");
// });

// myPromise
//   .catch((error) => {
//     console.log(error);
//   });

// let Promise1=Promise.resolve('apple');
// let Promise2=Promise.resolve('banana');
// let Promise3=Promise.resolve('mango');
// let Promise4=Promise.resolve('orange');

// Promise.all([Promise1,Promise2,Promise3,Promise4])
// .then((result)=>{
//   console.log(result)
// })
// .catch((error)=>{
//   console.log(error)
// })

// ===========================================
// asynschronous function

// async function getData() {
//    return "data received";
// }
// async function showData(){
//     const data=await getData();
//     console.log(data);
// }

// showData();

// basic array probelms

// let numbe = [10, 20, 30, 40, 50];

// for(let i=0; i<numbe.length; i++){
//   console.log(numbe[i]);
// }

let number = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

// find the largest number in an array

let num = [12, 45, 7, 89, 34];

let largest = num[0];
// console.log(largest)
for (let i = 1; i < num.length; i++) {
  if(num[i]>largest){
    largest=num[i];
  }
}
console.log(largest);


// check even numbers

let array = [12, 7, 8, 15, 20, 3, 6];

let countt=0;
for(let i=0; i<array.length; i++){
  if(array[i] % 2===0){
    countt++;

  }

}
console.log(countt);


// to store only even numbers in a new array.

let numbe = [12, 7, 8, 15, 20, 3, 6];

let newArray=[];
for(let i=0; i<numbe.length; i++){
  if(numbe[i] % 2===0){
    newArray[newArray.length] = numbe[i];
  }



}
console.log(newArray);