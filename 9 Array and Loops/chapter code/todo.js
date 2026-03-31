let todoList=[];

displayItems();
function addtodo(){

  let inputElements = document.querySelector('#todo-input');
  let todoitem=inputElements.value;

  todoList.push(todoitem);
   inputElements.value = '';

   
displayItems();
};

function displayItems(){
  let ContainerElement=document.querySelector('.todo-container');
 
  let newHTMl = '';

  for (let i = 0; i < todoList.length; i++) {

    newHTMl += `
        <div>
          <span>${todoList[i]} <span>
          <button>Delete</button>
        </div>
    `
      
       

    
  }
  ContainerElement.innerHTML=newHTMl;
}

