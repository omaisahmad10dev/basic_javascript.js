const ConvenienceFees=99;

let bagItemsObject;
onLoad();
function onLoad(){
  
ShowItems();
displayBagItem();
displayBagSummary();

};
function displayBagSummary(){
  
  let ConvenienceFees=99;
  let totalItem=bagItemsObject.length;
  let totalMRP=0;
  let TotalDiscount=0;

  bagItemsObject.forEach(item=>{
    totalMRP+=item.original_price;

    TotalDiscount+=item.original_price - item.current_price;
  });

  
  let finalAmount=totalMRP-TotalDiscount+ConvenienceFees;

  let bagSummaryElement=document.querySelector('.bag-summary');
  bagSummaryElement.innerHTML=`
       <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) 
              
            </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹${totalMRP}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${TotalDiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹${finalAmount} </span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
  `
}

function ShowItems() {
 bagItemsObject= BagItems.map(itemId=>{
    for (let i = 0; i < items.length; i++) {
      if(itemId ==items[i].id)
      return items[i];
    }
  });
  
};
function displayBagItem(){
  let displayElement=document.querySelector('.bag-items-container');
  let innerHtml='';
  bagItemsObject.forEach(BagItem => {
    innerHtml+=generatorItems(BagItem);
    
  });
  
  displayElement.innerHTML=innerHtml;

};

  function removeFormCart(itemsId) {
    BagItems=BagItems.filter(bagItemId=>bagItemId !=itemsId);
    localStorage.setItem('bagItems', JSON.stringify(BagItems));
    ShowItems();
    displayBagItem();
    displayBagIcon();
    displayBagSummary();
  }

function generatorItems(items) {
      return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${items.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${items.company}</div>
              <div class="item-name">${items.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${items.current_price}</span>
                <span class="original-price">Rs ${items.original_price}</span>
                <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${items.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${items.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart " onclick="removeFormCart(${items.id});">X</div>`;
            
  
};
