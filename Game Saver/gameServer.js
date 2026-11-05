let gameState={
  playerName:"omais Ahmad",
  level:5,
  score:4500
};

function saveGameData(){
  let gameElement=document.querySelector('#displayArea');
  localStorage.setItem('gameProgress' , JSON.stringify(gameState));
  gameElement.innerText=localStorage.getItem('gameProgress');


}

function loadGameData(){
  let SaveElement=document.querySelector('#displayArea');
 
  let data=JSON.parse(localStorage.getItem('gameProgress'));


  SaveElement.innerHTML=`"Welcome back ${data.playerName}! You are on Level ${data.level}."`;

}

saveGameData();
// loadGameData();

let dostonKiList = ["Omais", "Yaman", "Waseem"];

// Array ko Object mein badla
let dostonKaObject =Object.assign({},dostonKiList);
console.log(dostonKaObject);
