let numbers = [10, 25, 5, 40, 15];

let largest=numbers[0];

numbers.forEach(function(num){
    if(num>largest){
        largest=num;
    }
    
})
console.log(largest);

// ===================================================
// find smallest number 

let number = [18, 7, 32, 4, 15];
let smallest=number[0];
number.forEach(function(num){
    if(num<smallest){
        smallest=num;
    }
})
console.log(smallest);
// =================================================
// find array sum
let numbe = [10, 20, 30, 40, 50];

let result=numbe.reduce((total,num)=>{
    return total+num;
})
console.log(result);

// ===========================================
// Count Even Numbers
let numb = [2, 5, 8, 11, 14, 17, 20];

let resul=numb.reduce((total,num)=>{
    if(num % 2===0){
        total=total+num;
    }
    return total;
    
},0)
console.log(resul);
// =====================================================
// find average of number

let nums= [10, 20, 30, 40, 50];

let resu=nums.reduce((total,num)=>{
     return total + num;
     
},0)
let average = resu/nums.length;
console.log(average)

// ===================================================
// add positive number
let num = [-5, 10, -2, 20, 8, -1];

let outPut=num.reduce((total,num)=>{
    if(num>=0){
     return total+num;
    }else{
     return total;
    }
},0)
 console.log(outPut);
// ================================================================================
 let userID=[10, 25, 10, 40, 25, 55, 60];

let uniqueIDs=[];

for (let i = 0; i < userID.length; i++) {
    if (!uniqueIDs.includes(userID[i])) {

        uniqueIDs.push(userID[i]);
    }
    
}
console.log(uniqueIDs);