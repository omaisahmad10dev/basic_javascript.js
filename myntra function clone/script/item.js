let itemContainerElement=document.querySelector('.items-container');

let item={
    item_image:'images/1.jpg',
    Rating={
      stars: 4.5,
      noOFReviews:1400,
    }

}

itemContainerElement.innerHTML=`

    <div class="item-container">
            <img class="item-image" src="i" alt="">

            <div class="rating">
                4.5 ⭐ | 1.4k
            </div>

            <div class="company-name">
                carlton London
            </div>
            <div class="item-name">
                Rhodium-Plated CZ Foral Studs
            </div>

            <div class="item-price">
                <span class="current-price"> RS 606  </span>
                <span class="original-price">Rs 1045 </span>
                <span class="Discount">  (42% OFF) </span>
            </div>

            <button class="add-bag-btn">Add to Bag</button>
        </div>




`;