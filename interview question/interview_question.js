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

// function test(x) {
//   let result = x * 2;
//   return result;
// }
// console.log(test(3));
// -----------------------------------------
// function add(a, b) {
//   return a + b;
// }
// let answer = add(2, 3);
// console.log(answer);
// -----------------------------------------

// function testing(a, b) {
//   let x= a + b;
//   console.log(x)
// }
// testing(3,4);
// -----------------------------------------

// function test() {
//   console.log("Start");
//   return 5;
// }

// let x = test();
// console.log(x);
// console.log("End");
// -----------------------------------------
// function check(a) {
//   a=a+2;
//   return a;
// }

// let e=5;
// console.log(check(e))
// console.log(e)
// -----------------------------------------

// function test(a) {
//   return a + 2;
// }

// let x = 3;

// x = test(x);
// console.log(x);
// -----------------------------------------
// function test(a) {
//   a=a+2;
//   return a;
// }
// let x=4;
// console.log(test(x))
// console.log(test(x))
// console.log(x)
// -----------------------------------------
// function test(a) {
//   return a+1;
// }
// let x=4;
// x=test(x);
// console.log(test(x))
// console.log(x)
// -----------------------------------------
// function add(a,b) {
//   return a+b;
// }

// let x=add(2,3);
// x=add(x,4);
// console.log(x);
// -----------------------------------------

// function test(a) {
//   return a*3;
// }

// let x=3;
// let y=test(x);
// x=5;
// console.log(y)
// console.log(x)
// -----------------------------------------

// while loop

// let i=2;

// while (i<=6) {
//   console.log(i)
//   i =i+2;

// }
// -----------------------------------------

// let a=10;

// while (a>=1) {
//   console.log(a);
//   a =a-1;

// }
// -----------------------------------------

// let q = 5;

// do {
//   console.log(q);
//   q++;
// } while (q < 5);

// -----------------------------------------

// for (let i = 1; i <=2; i++){
//   for (let j = 1; j <=3; j++) {
//     console.log(i,j)

//   }

// }
// -----------------------------------------
// function variable(){
// for (let i = 1; i <= 5; i++) {
//   if (i === 2 || i === 4) {
//     continue;
//   }
//   console.log(i);
// }
// };

// function call(callBack) {
//   callBack();
// }

// call(variable);

// // slice

// let number=[10,20 ,30 ,40 , 50 ];

// let arry =number.slice(2,3);
// console.log(arry);
// console.log(number);

// // splice

// let degit=[10,20,30,40,50];

// let numeb=degit.splice(2,3);
// console.log(numeb);

// console.log(degit)

// --------------------------------------
// reduce

// let number=[2,3,4,5,6];

// let resul=number.reduce((total,num)=>{
//   return total+num;
// })

// console.log(resul);
// ========================================
// basic array problems

let number = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}

console.log(sum);

let array = [12, 45, 7, 89, 34];

let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];

    // console.log(largest)
  }
}

// Write your code here

console.log(largest);

let arra = [2, 5, 8, 11, 14, 17, 20];

let count = 0;
for (let i = 0; i < arra.length; i++) {
  if (arra[i] % 2 === 0) {
    count++;
  }
}
// Write your code here

console.log(count);

// let student = {
//   name: "Ali",
//   age: 20,
//   city: "Peshawar"
// };

// // Write your code here to remove city
// delete student.city;
// console.log(student)

// +++++++++++++++++++++++++++++++++++++++++++++++
// check specific property

// let student = {
//   name: "Ali",
//   age: 20
// };

// console.log(student.hasOwnProperty("age"))

// console.log(student["age"]);

// =============================================
// object destructuring

// let student={
//   name:"omais ahmad",
//   age:18,
// }
// student.age=29;

// let {name:property,age}=student;

// console.log(property);
// console.log(age);

// ==========================================================

let numbes=[1,2,3,4,5];

console.log(numbes)
console.log(...numbes)

let practice=[10,20,30,40];
console.log(...practice)
let practiceArray=[...practice]
console.log(practiceArray)

// ================================================
// spread operator

// let user = {
//   name: "Ali",
//   age: 20
// };

// let updatedUser = {
//   ...user,
//   age: 21
// };

// console.log(updatedUser);

let user = {
  name: "Ali",
  address: {
    city: "Lahore"
  }
};

let copy = {
  ...user,
  address: { ...user.address }
};

copy.address.city = "Karachi";

console.log(user.address.city);
console.log(copy.address.city);

// ==========================================
// rest operator

let users={
  name:"omais",
  age:18,
  class:"BS",
  study:"software engeneering",
}

let {name, ...rest}=users;

console.log(name);
console.log(rest);

// ===========================

// DEFAULT PARAMETERS


function greats(name="omais") {
  console.log(name)
  
};
greats();
greats("ali")

// optional changing

let optional={
  name:"numan",
  age:undefined,
  address:{
    city:"swabi"
  }
};

console.log(optional.address?.city)

const userr = undefined;
let city;

if (userr && userr.address && userr.address.city) {
  city = userr.address.city;
} else {
  city = undefined;
}

console.log(city);