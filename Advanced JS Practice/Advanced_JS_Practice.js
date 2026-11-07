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
let sum = 0;
for (let i = 1; i <= 10; i++) {
  console.log(i);

  sum = sum + i;
}
console.log(sum);

let students = [
  { name: "Ali", marks: 85, age: 20 },
  { name: "Ahmed", marks: 45, age: 19 },
  { name: "Sara", marks: 92, age: 21 },
  { name: "Usman", marks: 35, age: 18 },
  { name: "Ayesha", marks: 76, age: 20 },
];
// console.log(students[0].name);

let passedStudentCount = 0;
let faliedStudent = 0;
let averageMarks = 0;
let highestMArks = 0;
let topper = "";
students.forEach((num) => {
  let studentName;
  let passedStudent;

  studentName = num.name;

  if (num.marks >= 50) {
    passedStudent = num;
    passedStudentCount++;
  } else {
    faliedStudent++;
  }
  averageMarks += num.marks;
  if (num.marks > highestMArks) {
    highestMArks = num.marks;
    topper = num.name;
  }
  // console.log(studentName);
  // console.log(passedStudent);

  // console.log(passedStudent)
});

let average = averageMarks / students.length;
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
      { name: "Mouse", price: 1500, quantity: 2 },
    ],
    discount: 10,
    status: "delivered",
  },
  {
    orderId: 102,
    customer: "Sara",
    items: [
      { name: "Phone", price: 50000, quantity: 1 },
      { name: "Charger", price: 2000, quantity: 3 },
    ],
    discount: 5,
    status: "pending",
  },
  {
    orderId: 103,
    customer: "Ahmed",
    items: [
      { name: "Keyboard", price: 3000, quantity: 2 },
      { name: "Monitor", price: 25000, quantity: 1 },
    ],
    discount: 15,
    status: "delivered",
  },
  {
    orderId: 104,
    customer: "Ayesha",
    items: [
      { name: "Headphones", price: 5000, quantity: 2 },
      { name: "USB", price: 1000, quantity: 4 },
    ],
    discount: 0,
    status: "cancelled",
  },
];

let orderSummary = orders.map((order) => {
  let totalPrice = order.items.reduce((totals, item) => {
    return totals + item.quantity * item.price;
  }, 0);
  let discountAmount = (totalPrice * order.discount) / 100;
  // console.log(discountAmount)
  let finalPrice = totalPrice - discountAmount;
  // console.log(finalPrice)
  let deliveryMessage =
    order.status === "delivered"
      ? "Order Delivered"
      : order.status === "pending"
        ? "Order Pending"
        : "Order Cancelled";

  let isCompleted = order.status === "delivered";
  let totalItems = order.items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return {
    orderId: order.orderId,
    customer: order.customer,
    status: order.status,
    totalItems: totalItems,
    totalPrice: totalPrice,
    finalPrice: finalPrice,
    deliveryMessage: deliveryMessage,
    isCompleted: isCompleted,
  };
});
console.log(orderSummary);

let isAdult = 20 >= 18;
// console.log(isAdult);

// +===================================================
// fliter method

let orderss = [
  {
    orderId: 101,
    customer: "Ali",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Laptop", category: "electronics", price: 80000, inStock: true },
      { name: "Mouse", category: "electronics", price: 1500, inStock: true },
    ],
  },
  {
    orderId: 102,
    customer: "Sara",
    isPremium: true,
    status: "pending",
    payment: "paid",
    items: [
      { name: "Phone", category: "electronics", price: 50000, inStock: true },
      { name: "Shoes", category: "fashion", price: 4000, inStock: false },
    ],
  },
  {
    orderId: 103,
    customer: "Ahmed",
    isPremium: false,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Keyboard", category: "electronics", price: 3000, inStock: true },
      { name: "Monitor", category: "electronics", price: 25000, inStock: true },
    ],
  },
  {
    orderId: 104,
    customer: "Ayesha",
    isPremium: true,
    status: "cancelled",
    payment: "paid",
    items: [
      {
        name: "Headphones",
        category: "electronics",
        price: 15000,
        inStock: true,
      },
    ],
  },
  {
    orderId: 105,
    customer: "Usman",
    isPremium: true,
    status: "delivered",
    payment: "unpaid",
    items: [
      { name: "Laptop", category: "electronics", price: 90000, inStock: true },
      { name: "Bag", category: "fashion", price: 3000, inStock: true },
    ],
  },
  {
    orderId: 106,
    customer: "Zain",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Phone", category: "electronics", price: 60000, inStock: true },
      { name: "Laptop", category: "electronics", price: 100000, inStock: true },
    ],
  },
];

let allSummary = orderss.filter((order) => {
 return(
    order.isPremium &&
   order.status==="delivered"  && 
   order.payment==="paid" && 
  
  order.items.some((item)=>{
   return item.category==="electronics" && item.price>20000  
   }) &&
   order.items.every((stock)=>{
    return stock.inStock;
  })
  
 )  
});

console.log(allSummary)


// find concept 

let  data= [
  {
    orderId: 201,
    customer: "Ali",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Laptop", category: "electronics", price: 80000, quantity: 1, inStock: true },
      { name: "Mouse", category: "electronics", price: 2000, quantity: 2, inStock: true }
    ],
    reviews: [5, 4, 5]
  },
  {
    orderId: 202,
    customer: "Sara",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Phone", category: "electronics", price: 50000, quantity: 1, inStock: true },
      { name: "Shoes", category: "fashion", price: 4000, quantity: 1, inStock: true }
    ],
    reviews: [5, 5, 5]
  },
  {
    orderId: 203,
    customer: "Ahmed",
    isPremium: false,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Laptop", category: "electronics", price: 90000, quantity: 1, inStock: true },
      { name: "Keyboard", category: "electronics", price: 3000, quantity: 1, inStock: true }
    ],
    reviews: [4, 5, 5]
  },
  {
    orderId: 204,
    customer: "Ayesha",
    isPremium: true,
    status: "pending",
    payment: "paid",
    items: [
      { name: "Monitor", category: "electronics", price: 30000, quantity: 1, inStock: true },
      { name: "Mouse", category: "electronics", price: 1500, quantity: 1, inStock: true }
    ],
    reviews: [5, 5, 4]
  },
  {
    orderId: 205,
    customer: "Zain",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "Laptop", category: "electronics", price: 100000, quantity: 1, inStock: true },
      { name: "Monitor", category: "electronics", price: 25000, quantity: 1, inStock: true }
    ],
    reviews: [5, 5, 5]
  }
];


let allData=data.find((order)=>{
  return(
      order.isPremium && order.status==="delivered" && order.payment==="paid" &&
      order.items.filter((atLeast)=>{
        return atLeast.category==="electronics" 
      }).length>=2

  )
})
console.log(allData);