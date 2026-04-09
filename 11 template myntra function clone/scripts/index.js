let itemContenarElement = document.querySelector('.items_container');

let item={
  item_image:'images/1.jpg',
  rating:{
    stars:4.5,
    noOfReview:1400,
  },
  company_name:'carlton London',
  item_name:'Rhodium_Plated CZ Floral Studs',
  current_price:606,
  original_price:1045,
  discount_percentage:43,
}

itemContenarElement.innerHTML=` 
        <div class="item_container">
          <img class="images" src="${item.item_image}" alt="">
          <div class="rating">
             ${item.rating.stars} ⭐ |${item.rating.noOfReview} 
          </div>
          <div class="company_name">${item.company_name}</div>
          <div class="item_name">${item.item_name}</div>
          <div class="price">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price"> Rs ${item.original_price} </span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
          </div>
          <button class="btn_add_bag"> Add to Bag</button>
        </div>

      `;
      // console.log('hellow')

