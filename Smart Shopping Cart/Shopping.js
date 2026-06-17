
  let currentBill=0;
  
function addToCart(){
  let price=Number(document.querySelector('#priceInput').value);
  let messageElement=document.querySelector('#messageBox');
  let totalPriceElement=document.querySelector('#totalPriceText');
  if (price<=0) {
        messageElement.innerText='Oye! Sahi price likho!';
    
  }else{
    currentBill=currentBill+price;
   messageElement.innerText='';
 
  }
      totalPriceElement.innerText=`Total Bill: ${currentBill}`
    document.querySelector('#priceInput').value='';
}
function applyDiscount(){

          currentBill=currentBill-(currentBill*0.10); 

         document.querySelector('#totalPriceText').innerText=`Total Bill: ${currentBill}`;
          

          let messageElement=document.querySelector('#messageBox');
          messageElement.innerHTML="<h1 style='color: green;'>Mubarak ho! 🎉 Discount lag gaya!</h1>"
}