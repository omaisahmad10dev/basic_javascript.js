let todoList=[

      {item: 'by milk',
      dueDate: '01/04/2026'},
  
      {item: ' Go to college',
      dueDate: '01/04/2026'}
    ];

displayItems();
function addtodo(){

  let inputElements = document.querySelector('#todo-input');
  
  let DateElements = document.querySelector('#todo-date');

  let todoitem=inputElements.value;
  let tododate=DateElements.value;

  todoList.push({ item:  todoitem, dueDate : tododate});
   inputElements.value = '';
   DateElements.value = '';


   
displayItems();
};

function displayItems(){
  let ContainerElement=document.querySelector('.todo-container');
 
  let newHTMl = '';
  for (let i = 0; i < todoList.length; i++) {
     let {item , dueDate}=todoList[i];
    
    newHTMl += `
           
          <div> <span>${item} <span></div>
         <div> <span>${dueDate} <span></div>

     <div ><button class="btun-delete"  onclick="todoList.splice(${i} , 1);
            displayItems();
         
            ">Delete</button></div>
    `;
  }
  ContainerElement.innerHTML=newHTMl;
};

