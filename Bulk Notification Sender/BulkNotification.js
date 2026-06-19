let friendList=['omais', 'yaman' ,'waseem ' , 'hammad'];

function sendNotifications(){
  let sendMessage=document.querySelector('#notificationArea');
  sendMessage.innerHTML='';

  friendList.forEach(naam => {
    sendMessage.innerHTML+=`Hey [${naam}]! Kal subah match khelne aana hai. ⚽</br>`
    
  });
}