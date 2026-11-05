
  const ITEMS_PRICE=300;

  let items=[
    {id:1 , name:"watch", stock:12},
    {id:2 , name:"pen", stock:9},
    {id:3 , name:"markar", stock:20},
    {id:4 , name:"laptop", stock:6},

  ];
  let cart=[];


  function displayItems(){
     let newHTML='';
    let displayItem=document.querySelector('#display-item');
    for (let i = 0; i < items.length; i++) {
   
    newHTML+=`
    <div>
      <span id="product"> ${items[i].name} ${items[i].stock}</span><br>

      <span><button id="button" onclick="addToCart(${items[i].id});">Add to cart</button></span>
    </div>
    `
      
    }
    displayItem.innerHTML=newHTML;


  }

  function addToCart(productID) {

    let foundItems=items.find(item=>item.id===productID);
    if (foundItems && foundItems.stock > 0) {
          foundItems.stock--;
          cart.push(foundItems);
    }else{
      alert("Product ka stock khatam ho chuka hai!");

    }
    
    
    displayItems();
    displayCart();
      
  }
  function displayCart(){
    let displayCart=document.querySelector('#display-cart');

    let cartHTML='';
    for (let i = 0; i < cart.length; i++) {
      cartHTML+=`
        <span><h3> ${cart[i].name}</h3></span>
              
      `
      
    }
    
      let total=cart.length*ITEMS_PRICE;
      cartHTML+=`<h3 id="total">Total Bill : Rs ${total}</h3>`

    displayCart.innerHTML=cartHTML

  }

  displayItems();
