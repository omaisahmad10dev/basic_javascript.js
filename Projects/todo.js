let todoList=[];

displayItems();
function AddTodo(){
  let inputElement=document.querySelector('#Todo-input');
  
  let dateElement=document.querySelector('#Todo-date');
  
  let todoItems=inputElement.value;
  let dateItems=dateElement.value;

  todoList.push({
    items:todoItems,
    dueDate:dateItems,
  });
 
  
  inputElement.value='';
  dateElement.value='';
  displayItems();

}
function displayItems(){
  let containerElements=document.querySelector('#todo-container');

      let newHTML='';
      for(let i=0; i < todoList.length; i++){
      newHTML+=`
      
      <span>${todoList[i].items} </span>
      <span>${todoList[i].dueDate} </span>
      <button id='btn-delete' onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
 
      `
      
 
  }
  containerElements.innerHTML=newHTML;
}