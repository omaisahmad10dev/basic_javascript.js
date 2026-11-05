
class ShoppingCart {
  constructor(customerName) {
    this.customerName=customerName;
    this.item=[];
  }
  addItem(itemName, price, quantity){
   let items= { name: itemName, 
      price: price,
      quantity: quantity
      }
      this.item.push(items)
  }
  updateQuantity(itemName, newQuantity){
    for (let i = 0; i < this.item.length; i++) {
      if (this.item[i].name===itemName) {
        this.item[i].quantity=newQuantity;
        
      }
      
    }
  }
  calcuateTotalBil(){
    let totalBill=0;
    for (let i = 0; i < this.item.length; i++) {
      totalBill+=this.item[i].price* this.item[i].quantity;
     
      
    }
     console.log(`${this.customerName} aap ka kul bill ${totalBill} Rupay hai`)
  }
}

let myCart=new ShoppingCart('omais')
myCart.addItem('choculate cake', 100,2);
// myCart.addItem("Pastry", 100, 4);

myCart.updateQuantity("pastery" , 1)

myCart.calcuateTotalBil()