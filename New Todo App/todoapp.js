let todoList=[];

displayitems();
function addToDiv() {
  let todoInputElement=document.querySelector('#todo-input');
  let todoDateElement=document.querySelector('#todo-date');

  let todoItems=todoInputElement.value;
  let dateItems=todoDateElement.value;

  todoList.push({
          items:todoItems,
          dueDate:dateItems,
     })

     todoInputElement.value='';
     todoDateElement.value='';
     displayitems();
}

function displayitems() {
  let containerElement=document.querySelector('#todo-container');

  let newHTML='';

      for (let i = 0; i < todoList.length; i++) {
        newHTML+=`
              <span>${todoList[i].items}</span>
              <span>${todoList[i].dueDate}</span>
              
      <button id='btn-delete' onclick="todoList.splice(${i}, 1);
       displayitems();">Delete</button>`        
      }
      containerElement.innerHTML=newHTML;

}