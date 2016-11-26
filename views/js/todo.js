console.log('todo js starting');



document.getElementById('add').addEventListener('click', function(){
  let value = document.getElementById('todo-item').value;
  console.log(value);

  if(value){
    addItemTodo(value);
    document.getElementById('todo-item').value = '';
  }

})

//addItemTodo function
function addItemTodo(){
  console.log('todo item added');
}
