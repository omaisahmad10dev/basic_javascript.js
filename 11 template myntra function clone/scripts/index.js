let itemContenarElement = document.querySelector('.items_container');
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
          <button class="btn_add_bag"> Add to Bag</button>
        </div>

      `
});

itemContenarElement.innerHTML=innerHTML;
      // console.log('hellow')

