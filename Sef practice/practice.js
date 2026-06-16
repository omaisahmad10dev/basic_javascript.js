

practice();
let age=30;
function practice() {
  if (true) {
    let age =20;
    console.log('ye block of code ha ',age) ;  
  }         
}           
  console.log('aur ye bahar ha',age); 



  // for (let i = 0; i<=10; i++) {
  //   console.log('for loop chlao',i)
    
  // }

// let marks=0;
// // console.log(marks)

//   while(marks <= 100){
//     if (marks ===33) {
//       console.log('you are passed',marks)
      
//     }else if(marks ===50){
//       console.log('you are B Grade')
//     }else if(marks ===80){
//       console.log('you are A Grade',marks)
//     }else if(marks ===95){
//       console.log('you are A1 Grade', marks)
//     }else if(marks <33){
//           console.log('tum Log Study Karo', marks)      
//     }else{
//       console.log('baqi sab passed ho ', marks)
//     }
//     marks++;
  

//   }

// let diceRoll;
// let attemps=0;
//   do {
//        diceRoll= Math.floor(Math.random()*6+1);
//         attemps++;
//         console.log(`chackar number ${attemps} : dice ka number aya ${diceRoll}`)
    
//   } while (diceRoll !==6);

//   console.log(`Mubarak ho! ${attemps} dafa phenkne ke baad 6 aa gaya. Aap game mein enter ho gaye! `)


// let accouontBalance=15000;
// let widraw=5000;
// let transaction=0;
// while (accouontBalance>=widraw) {

//       accouontBalance=accouontBalance-widraw;
      
//   transaction++;
//   console.log(`Transaction number ${transaction}: Aap ne 5000 nikale. Baqi Balance: ${accouontBalance}`);
  
// }

// console.log(`ATM chalna band ho gaya. Kul Transactions: ${transaction}. Aap ka bacha hua balance: ${accouontBalance}`)


// let cartPrices = [450, 1200, 850, 2300, 950, 5000];

// function lessPriceProduct(){
//       let product=cartPrices.filter(num=>num<=1000);
//       console.log(product)
// }
// lessPriceProduct();



let cartPrices = [450, 1200, 850, 2300, 950, 5000];

// let allProductDiscount=function discountOffer() {

//   let finalPrice=cartPrices.filter(num=>num>1000).map(num=>num-200)
//   console.log(finalPrice);
  
// }
// allProductDiscount();




// let arr=[5,10,15];
// // console.log(arr)
// let sum=0;
// arr.forEach((num)=>{
//   sum=sum+num;
    

// })

//     console.log('total numbers is: ',sum);
// function CheckPassword() {
// let passwordElement=document.getElementById('password').value.length;
//     if (passwordElement < 6) {
//         console.log('kamzoor password')      
//     }else{
      
//           console.log('mazboot password')
//     }
    


// }

// function clearPassword() {
//     document.getElementById('password').value='';
  
// }

let totalAmount=function withdrawCash(currentBalance,amountToWithdraw) {
      if (amountToWithdraw <=currentBalance) {
          console.log(`Transaction Successful! app ka paisa ha`);
      }else{
        console.log('Incomplete Balance! Aap ke account mein paise kam hain');
        
      }
  
};
totalAmount(1200,100)

totalAmount(1200,1210)

