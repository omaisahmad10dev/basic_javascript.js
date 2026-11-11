let order = [
  {
    id: 101,
    customer: "Ali",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "laptop", price: 50000, quantity: 1 },
      { name: "mouse", price: 1000, quantity: 2 },
    ],
  },
  {
    id: 102,
    customer: "Ahmad",
    isPremium: false,
    status: "pending",
    payment: "paid",
    items: [{ name: "Mobile", price: 30000, quantity: 1 }],
  },
  {
    id: 103,
    customer: "sara",
    isPremium: true,
    status: "delivered",
    payment: "paid",
    items: [
      { name: "keyboard", price: 3000, quantity: 2 },
      { name: "mouse", price: 1000, quantity: 1 },
    ],
  },
  {
    id: 104,
    customer: "Hamza",
    isPremium: true,
    status: "cancelled",
    payment: "unpaid",
    items: [{ name: "Monitor", price: 20000, quantity: 1 }],
  },
  {
    id: 105,
    customer: "ayesha",
    isPremium: false,
    status: "delivered",
    payment: "unpaid",
    items: [{ name: "Headphones", price: 2000, quantity: 3 }],
  },
];

function calculate(num) {
  let calculateOrderPrice = order.map((num) => {
    return num.items.reduce((total, sum) => {
      return total + sum.price * sum.quantity;
    }, 0);
  });
  console.log(calculateOrderPrice);

  let PremiumCustomer = order.filter((total) => {
    return total.isPremium
  })
  .map((num)=>{
    return{
        customer:num.customer,
        totalPrice:num.items.reduce((total,sum)=>{
            return total+sum.price * sum.quantity;
        },0)
    }
  })
  
  console.log(PremiumCustomer);
  
}
calculate();
