let button = document.querySelector("#btn");

button.addEventListener("click", function (hello) {
  console.log(hello.target);

  button.innerHTML = "<h1><i>click me</i> </h2>;";
});

let sameBtn = document.querySelector("#btn");
button.addEventListener("click", function (hello) {
  console.log(hello.type);
});

let formBtn = document.querySelector("#button");

formBtn.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("button submit");
});

let divElement = document.querySelector("#div");
console.log(divElement.innerHTML);
console.log(divElement.innerText);

// NodeList

let students = document.querySelectorAll(".student");

console.log(students[0]);
console.log(students[1]);

students.forEach(function (student) {
  student.innerText = "Hello";
});

// classLIst.contains()

let buttons = document.querySelector(".btn");

if (buttons.classList.contains("btn")) {
  buttons.innerText = "active";
}

// setAttribute()

let image = document.querySelector("#myImage");
let link = document.querySelector("#myLink");

// Change image source
image.setAttribute("src", "new.jpg");

// Change image alt text
image.setAttribute("alt", "New Image");

// Change link destination
link.setAttribute("href", "https://example.com");

// inputElement.value

let inputElement = document.querySelector(".inputElement");

inputElement.value = "34";

let addNumber = inputElement.value;
let sumNumber = Number(addNumber);
console.log(sumNumber + 1);

let arr = [1, 2, 3, 4, 5, 6];

let result = arr.find((arr) => {
  return arr > 5;
});

console.log(result);

let numbers = [1, 3, 4, 65, 6, 4];

let results = numbers.filter((num) => {
  return num > 3;
});
console.log(results);

function interviewQuestions() {
  console.log("hello");
}
interviewQuestions();

// for loop
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
  console.log(`2 * ${num[i]} = ${num[i] * 2}`);
}

// function parameters and arguments

function great(name) {
  console.log("hello ");
  console.log(name);
}

great("omais");

// return statements

function greet(num) {
  return 2 * num;
}

greet(3);

// testing code

function test(x) {
  let result = x * 2;
  return result;
}
console.log(test(3));

function add(a, b) {
  return a + b;
}
let answer = add(2, 3);
console.log(answer);

function testing(a, b) {
  let x= a + b;
  console.log(x)
}
testing(3,4);

function test() {
  console.log("Start");
  return 5;
}

let x = test();
console.log(x);
console.log("End");
