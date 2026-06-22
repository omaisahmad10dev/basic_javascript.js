
let cartItems = [
  { name: "Shoes", price: 5000 },
  { name: "T-Shirt", price: 1500 },
  { name: "Watch", price: 3500 }
];

function ECommerceCart() {
  let ECommerceCartElement=document.querySelector('#add-cart');  

  ECommerceCartElement.innerHTML="";
  
  let totalBill=0;
cartItems.forEach(item=>{
  ECommerceCartElement.innerHTML+=`${item.name} Rs.${item.price} <br>`

  totalBill+=item.price;
})

  ECommerceCartElement.innerHTML+=`<hr> <b> Total BIll: Rs. ${totalBill} </b>`



}
// ECommerceCart();