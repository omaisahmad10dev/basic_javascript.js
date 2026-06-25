let foodMenu = [
  { id: 1, name: "Pizza", price: 1200 },
  { id: 2, name: "Burger", price: 450 },
  { id: 3, name: "Fries", price: 250 }
];

  let userCart=[];
  console.log(userCart);
  
  
  let isUserVIP=true;

function displaymenu() {
    let menuContainerElement=document.querySelector('#menu-container');
    let menuHTML='';

    for (let i = 0; i < foodMenu.length; i++) {
     let items=foodMenu[i];
    //  console.log(items);
      menuHTML+=`
          <div class="food-item"> 
            <span>${items.name}. Rs ${items.price}</span>
            <button onclick="addToCart(${items.id})">
            AddToCart
            </button>
          </div>
      `
    }
    menuContainerElement.innerHTML=menuHTML;
}

function addToCart(productID){
  
    let itemFound=false;
    // console.log(itemFound);
    

  for (let i = 0; i < userCart.length; i++) {
    if (userCart[i].id===productID) {
      userCart[i].quantity+=1;
      itemFound =true;
           break;
    }
   }

  
      if (itemFound===false) {
        for (let j = 0; j < foodMenu.length; j++) {
          if (foodMenu[j].id===productID) {
           let newItem={
             id:foodMenu[j].id,
            name : foodMenu[j].name,
            price:foodMenu[j].price,
            quantity:1,
           };
            userCart.push(newItem);
              break;
            
          }
          
        }

        
      }
      calculateTotal();
      displayCart();
}
function calculateTotal() {
  let billContainerElement=document.querySelector('.bill-box');
  let totalBill=0;
  console.log(totalBill);

  for (let i = 0; i < userCart.length; i++) {
    totalBill+=userCart[i].price*userCart[i].quantity;
    
  }
  let finalBIll=isUserVIP ? totalBill * 0.90 : totalBill;

  billContainerElement.innerHTML=`
      <h3>Total BIll. Rs. ${totalBill}</h3>
      <h3 style="color: green;">Final BIll is (With VIP Discount is )Rs ${finalBIll}</h3>
  ` 
}

function displayCart() {
  let cartContainerElement=document.querySelector('#cart-container');
  let cartHTML='';

  for (let i = 0; i < userCart.length; i++) {
    let item=userCart[i];
    cartHTML+=`
        <span><b>${item.name}</b> (Rs.${item.price}) x ${item.quantity}</span>
        <span>Rs. ${item.price * item.quantity} </span>

    `
    
  }
    cartContainerElement.innerHTML=cartHTML;
}


displaymenu();

