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
// console.log(orderSummary);

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
  return (
    order.isPremium &&
    order.status === "delivered" &&
    order.payment === "paid" &&
    order.items.some((item) => {
      return item.category === "electronics" && item.price > 20000;
    }) &&
    order.items.every((stock) => {
      return stock.inStock;
    })
  );
});

// console.log(allSummary)

// find concept

let data = [
  {
    orderId: 201,
    customer: "Ali",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      {
        name: "Laptop",
        category: "electronics",
        price: 80000,
        quantity: 1,
        inStock: true,
      },
      {
        name: "Mouse",
        category: "electronics",
        price: 2000,
        quantity: 2,
        inStock: true,
      },
    ],
    reviews: [5, 4, 5],
  },
  {
    orderId: 202,
    customer: "Sara",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      {
        name: "Phone",
        category: "electronics",
        price: 50000,
        quantity: 1,
        inStock: true,
      },
      {
        name: "Shoes",
        category: "fashion",
        price: 4000,
        quantity: 1,
        inStock: true,
      },
    ],
    reviews: [5, 5, 5],
  },
  {
    orderId: 203,
    customer: "Ahmed",
    isPremium: false,
    status: "delivered",
    payment: "paid",
    items: [
      {
        name: "Laptop",
        category: "electronics",
        price: 90000,
        quantity: 1,
        inStock: true,
      },
      {
        name: "Keyboard",
        category: "electronics",
        price: 3000,
        quantity: 1,
        inStock: true,
      },
    ],
    reviews: [4, 5, 5],
  },
  {
    orderId: 204,
    customer: "Ayesha",
    isPremium: true,
    status: "pending",
    payment: "paid",
    items: [
      {
        name: "Monitor",
        category: "electronics",
        price: 30000,
        quantity: 1,
        inStock: true,
      },
      {
        name: "Mouse",
        category: "electronics",
        price: 1500,
        quantity: 1,
        inStock: true,
      },
    ],
    reviews: [5, 5, 4],
  },
  {
    orderId: 205,
    customer: "Zain",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      {
        name: "Laptop",
        category: "electronics",
        price: 100000,
        quantity: 1,
        inStock: true,
      },
      {
        name: "Monitor",
        category: "electronics",
        price: 25000,
        quantity: 1,
        inStock: true,
      },
    ],
    reviews: [5, 5, 5],
  },
];

let allData = data.find((order) => {
  return (
    order.isPremium &&
    order.status === "delivered" &&
    order.payment === "paid" &&
    order.items.filter((atLeast) => {
      return atLeast.category === "electronics";
    }).length >= 2 &&
    order.items.every((stock) => {
      return stock.inStock;
    }) &&
    order.reviews.every((atLeast) => {
      return atLeast >= 4;
    })
  );
});
// console.log(allData);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// sort()

let products = [
  { id: 101, name: "Laptop", price: 80000, rating: 4.5 },
  { id: 102, name: "Mouse", price: 1500, rating: 4.2 },
  { id: 103, name: "Phone", price: 50000, rating: 4.8 },
  { id: 104, name: "Keyboard", price: 3000, rating: 4.1 },
  { id: 105, name: "Monitor", price: 25000, rating: 4.5 },
  { id: 106, name: "Headphones", price: 5000, rating: 4.8 },
  { id: 107, name: "Tablet", price: 30000, rating: 4.3 },
];

let wishlist = [103, 106, 101, 105];

let productSummary = products.sort((a, b) => {
  return a.rating === b.rating
    ? a.price === b.price
      ? a.id - b.id
      : a.price - b.price
    : b.rating - a.rating;
});
// console.log(productSummary);

// ==================================================================
// this keywords concept

let cart = {
  userName: "Ali",
  items: [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
    { name: "Keyboard", price: 3000, quantity: 1 },
  ],

  showUser() {
    console.log(this.userName);
  },

  calculateTotal() {
    console.log(this.items);
    let totalPrice = this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    return totalPrice;
  },
};

// console.log(cart.calculateTotal());
// ==================================================================
// dot and bracket notaion

let student = {
  name: "Ali",
  subjects: {
    JavaScript: 85,
    Math: 90,
  },
  "total-marks": 175,
  101: {
    result: "Pass",
  },
};

let key = "JavaScript";

// console.log(student.name);

// console.log(student.subjects["JavaScript"]);
// console.log(student["total-marks"]);
// console.log(student[101].result);
// // =================================================================

let company = {
  name: "Google",
  employees: [
    { id: 101, "full-name": "Ali Khan", salary: 50000 },
    { id: 102, "full-name": "Ahmed Khan", salary: 60000 },
  ],
};

let employeeIndex = 1;
let property = "full-name";

// console.log(company.employees[employeeIndex]);

// console.log(company.employees[employeeIndex][property]);

// ==================================================================
// json concept ?

let order = {
  orderId: 501,
  customer: {
    name: "Ali",
    isPremium: true,
  },
  items: [
    { name: "Laptop", price: 80000, quantity: 1 },
    { name: "Mouse", price: 1500, quantity: 2 },
  ],
  status: "delivered",
};

// let storage = JSON.stringify(order);
// let storeData=localStorage.setItem("myOrder" , storage);

// let getData=localStorage.getItem("myOrder");

// let getJson=JSON.parse(getData);
// // console.log(getJson);

// console.log(getJson.customer.name);

// console.log(getJson.customer.isPremium);

// let storage = JSON.stringify(order);
// let getJson = JSON.parse(storage);

// console.log(order === getJson);
// console.log( getJson.items[0]);

// ================================================================
// event listner concept

let userName = document.querySelector("#username");
let result = document.querySelector("#result");

// userName.addEventListener("input", () => {
//   result.innerText = userName.value;
// });

userName.addEventListener("change", () => {
  result.innerText = userName.value;
});


let name = document.querySelector("#name");
let btn = document.querySelector("#btn");
let results = document.querySelector("#result");

// btn.addEventListener("click", function() {
//   results.innerText = name.value;
//   console.log(event)
// });

document.addEventListener("click", function(event) {
  console.log(event.target.tagName);
});