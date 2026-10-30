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
  console.log('hellossssss')
}
function great(){

  console.log('welcome');
}
great(sayBaye());



let myPromise = new Promise((resolve, reject) => {
  reject("Network Error");
});

myPromise
  .catch((error) => {
    console.log(error);
  });