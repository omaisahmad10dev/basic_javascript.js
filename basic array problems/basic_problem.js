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

let resul=numb.reduce((num)=>{
    if(num % 2===0){
        return num;
    }
    
})
console.log(resul);
