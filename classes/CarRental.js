
class car {
  constructor(id,model,perDayRent) {
    this.id=id;
    this.model=model;
    this.perDayRent=perDayRent;
    this.isAvailabel=true;
    
  }
  rentOut(){
    if (this.isAvailabel===true) {
      this.isAvailabel=false;
      console.log(`${this.model} kamyabi se rent par de di gayi hai`)
      }else{
        console.log(`Alert: ${this.model} pehle se booked hai!`)
      
    }
  }
  returnCar(){
    this.isAvailabel=true;
        console.log(` ${this.model} wapas showroom mein aa gayi hai.`)
  
}
};
class RentalCustomer {
  constructor(customerName, membershipType) {
    this.customerName = customerName;
    this.membershipType = membershipType; 
    this.rentedCars = []; 
  }

  bookCar(CarObject,days){
    if (CarObject.isAvailabel===false) {
      console.log(`Sorry ${this.customerName}, ${CarObject.model} pehle se kisi aur ke paas rent par hai!`);
      return;
      
    }
    let discountPercent=0;
    if (this.membershipType==="Gold") {
      discountPercent=10;
    }else if(this.membershipType==="Platinum"){
      discountPercent=20;
    }
    let grossTotal=days*CarObject.perDayRent;
    let discountAmount=(grossTotal*discountPercent)/100;
    let finalBill=grossTotal-discountAmount;

    this.rentedCars.push(CarObject);
    CarObject.rentOut();


    console.log(`--- Booking Successful ---`);
    console.log(`Customer: ${this.customerName} (${this.membershipType} Member)`);
    console.log(`Vehicle: ${CarObject.model} for ${days} days.`);
    console.log(`Total Bill: Rs. ${finalBill} (Discount Applied: Rs. ${discountAmount})`);
    console.log(`--------------------------`);
  }


};

let car1 = new car(101 , 'civic' , 5000);
let car2 = new car(102 , 'fortuner' , 15000);

let customer1 = new RentalCustomer("Ali", "Gold");
let customer2 = new RentalCustomer("Bilal", "Regular");

// customer1.bookCar(car1,4)

customer1.bookCar(car1,2)

customer1.bookCar(car1,2)
customer1.bookCar(car1,2)