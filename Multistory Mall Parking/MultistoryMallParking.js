

function MultistoryMallParking() {
  let parking=document.querySelector('#MultistoryMallParking');
 
parking.innerText='';
for (let floor = 1; floor <=3 ; floor++) {

    for (let slots = 1; slots <=4; slots++) {
      
      parking.innerHTML+=`Floor ${floor} -> Slot ${slots} </br>`;
  
}
}
 
};
MultistoryMallParking();