
  const ITEMS_PRICE=300;

  let items=[
    {id:1 , name:"watch", stock:12},
    {id:2 , name:"pen", stock:9},
    {id:3 , name:"markar", stock:20},
    {id:4 , name:"laptop", stock:6},

  ];


  function displayItems(){
     let newHTML='';
    let displayItem=document.querySelector('#display-item');
    for (let i = 0; i < items.length; i++) {
   
    newHTML+=`
      <span> ${items[i].name} ${items[i].stock}</span><br>

      <span><button onclick="addToCart(${items[i].id});">Add to cart</button></span>
    
    `
      
    }
    displayItem.innerHTML=newHTML;


  }
  displayItems();
