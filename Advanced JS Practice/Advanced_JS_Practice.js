// Advanced JS Practice

let values = [0, null, undefined, true, "", false, "0"];

let countTrue = 0;
let falseValues = 0;

for (let i = 0; i < values.length; i++) {
  if (Boolean(values[i])) {
    // console.log("Truthy value:", values[i]);
    countTrue++;
  } else {
    // console.log("Falsy value:", values[i]);
    falseValues++;
  }
}

// console.log("Total Truthy:", countTrue);
// console.log("Total Falsy:", falseValues);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// switch statement

let marks = 30;

switch (marks) {
  case 30:
    // console.log("A+");
    break;
  case 20:
    console.log("B");
    break;

  default:
    console.log("C");
    break;
}

// for loop
let sum=0;
for (let i = 1; i <=10; i++) {
    console.log(i);

    sum=sum+i;
    
}
console.log(sum);



let students = [
  { name: "Ali", marks: 85, age: 20 },
  { name: "Ahmed", marks: 45, age: 19 },
  { name: "Sara", marks: 92, age: 21 },
  { name: "Usman", marks: 35, age: 18 },
  { name: "Ayesha", marks: 76, age: 20 }
];
// console.log(students[0].name);
    
    let passedStudentCount=0;
    let faliedStudent=0;
    let averageMarks=0;
    let highestMArks=0;
    let topper="";
students.forEach((num)=>{
    let studentName;
    let passedStudent;
    
    
    studentName=num.name;

    if(num.marks>=50){
     passedStudent=num;
     passedStudentCount++;
    }else{
        faliedStudent++;
    }
    averageMarks+=num.marks;
    if(num.marks>highestMArks){
        highestMArks=num.marks;
        topper=num.name;
    }
    // console.log(studentName);
    // console.log(passedStudent);
    

    // console.log(passedStudent)
})

let average=averageMarks/students.length;
// console.log(passedStudentCount)
// console.log(faliedStudent)
// console.log( average)
//  console.log(highestMArks);
//   console.log(topper);

// =======================================================/
//   MAP METHOD



  let orders = [
  {
    orderId: 101,
    customer: "Ali",
    items: [
      { name: "Laptop", price: 80000, quantity: 1 },
      { name: "Mouse", price: 1500, quantity: 2 }
    ],
    discount: 10,
    status: "delivered"
  },
  {
    orderId: 102,
    customer: "Sara",
    items: [
      { name: "Phone", price: 50000, quantity: 1 },
      { name: "Charger", price: 2000, quantity: 3 }
    ],
    discount: 5,
    status: "pending"
  },
  {
    orderId: 103,
    customer: "Ahmed",
    items: [
      { name: "Keyboard", price: 3000, quantity: 2 },
      { name: "Monitor", price: 25000, quantity: 1 }
    ],
    discount: 15,
    status: "delivered"
  },
  {
    orderId: 104,
    customer: "Ayesha",
    items: [
      { name: "Headphones", price: 5000, quantity: 2 },
      { name: "USB", price: 1000, quantity: 4 }
    ],
    discount: 0,
    status: "cancelled"
  }
];

let orderSummary=orders.map((order)=>{
        order.orderId;
})
console.log()