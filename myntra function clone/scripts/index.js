
let BagItems;
onLoad();
function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    BagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];

displayItemOnHomePage();
displayBagIcon();
}

function AddToBag(itemid){
    BagItems.push(itemid);
    localStorage.setItem('bagItems', JSON.stringify(BagItems));

    displayBagIcon();

}
function displayBagIcon(){
        let bagItemCountElement=document.querySelector('.bag-item-count');
        if (BagItems.length > 0) {
            bagItemCountElement.style.visibility='visible';
            
        bagItemCountElement.innerText=BagItems.length;
        }else{
            bagItemCountElement.style.visibility='hidden';
        }

    }

function displayItemOnHomePage(){
    
    
    let itemContainerElement=document.querySelector('.items-container');

    if (!itemContainerElement) {
        return;
    }

    let innerHTML='';

    items.forEach(item=>{
        innerHTML+=`

    <div class="item-container">
            <img class="item-image" src="${item.image}" alt="">

            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>

            <div class="company-name">
                ${item.company}
            </div>
            <div class="item-name">
            ${item.item_name}
            </div>

            <div class="item-price">
                <span class="current-price"> RS  ${item.current_price} </span>
                <span class="original-price">Rs ${item.original_price} </span>

                <span class="Discount">  ( ${item.discount_percentage}% OFF) </span>
            </div>

            <button class="add-bag-btn"  onclick="AddToBag(${item.id});">Add to Bag</button>
        </div>`
        });



itemContainerElement.innerHTML=innerHTML;

};