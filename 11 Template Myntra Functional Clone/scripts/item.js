let ItemsContainerElement=document.querySelector('.items-container');
 
let item={
  item_image: 'images/1.jpg',
  rating:{
      star:4.5,
      noOfReviews:1400,
  },
  company_name:'carlton London',
  item_name:'Rhodium-Plated CZ Floral Studs',

      current_price:'606',
      original_price:'1045',
      discount:42,
  
}
 
ItemsContainerElement.innerHTML=` <div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="">
                <div class="rating">
                  ${item.rating.star} ⭐ | ${item.rating.noOfReviews}
                </div>
                <div class="company-name">${item.company_name}</div>

                <div class="item-name">${item.item_name}</div>
                <div class="price">
                  <span class="current-price"> Rs ${item.current_price} </span>

                  <span class="original-price">Rs ${item.original_price}  </span>
                  <span class="discount"> (${item.discount}% OFF)</span>
                </div>
                  <button class="btn-Add-bag">Add To Bag</button>
        </div>`;