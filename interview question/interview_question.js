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
  console.log('hello')
  
}
interviewQuestions();
