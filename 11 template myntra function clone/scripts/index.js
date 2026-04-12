 
  let bagItem;
  onLoad();
  function onLoad(){
DisplayItemOnHoomePage();
let bagItemsStr=localStorage.getItem('bagItems');
bagItem=bagItemsStr ? JSON.parse(bagItemsStr) : [];
DisplayBagIcon();
}
 
  function addtoBag(itemId){
    bagItem.push(itemId);
    localStorage.setItem('bagItems' , JSON.stringify(bagItem));
    DisplayBagIcon();
  }
 

  function DisplayBagIcon(){
    let DisplayItemCountElement=document.querySelector('.bag-Item-count');
    if(bagItem.length > 0){
      
     DisplayItemCountElement.innerText=bagItem.length;
    DisplayItemCountElement.style.visibility='visible';
   
        
    }else{
      DisplayItemCountElement.style.visibility='hidden';

    }
  }

function DisplayItemOnHoomePage() {
  
let itemCounterElement = document.querySelector('.items_container');
let innerHTML='';
items.forEach(item=>{
  innerHTML+=` 
        <div class="item_container">
          <img class="images" src="${item.image}" alt="">
          <div class="rating">
             ${item.rating.Stars} ⭐ |${item.rating.count} 
          </div>
          <div class="company_name">${item.company}</div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price"> Rs ${item.original_price} </span>
            <span class="discount">(${item.Discount}% OFF)</span>
          </div>
          <button class="btn_add_bag" onclick="addtoBag(${item.id});"> Add to Bag</button>
        </div>

      `
});

itemCounterElement.innerHTML=innerHTML;
      // console.log('hellow')


};
