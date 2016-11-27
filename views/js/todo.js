

function go(){

  document.getElementById('add').addEventListener('click', function(){
    let value = document.getElementById('todo-item').value;
    console.log(value);

    if(value){
      addItemTodo(value);
      document.getElementById('todo-item').value = '';
    }

  })

  //addItemTodo function
  function addItemTodo(text){
    console.log('addItemTodo called');
    var list = document.getElementById('todo');

		var item = document.createElement('li');
		item.innerText = text;

    var buttons = document.createElement('div');
		buttons.classList.add('buttons');
  }

  //
}





///////////////////////////////////////////////////////
/* THIS IS VERY IMPORTANT */
//as soon as the DOM is ready, we'll execute the go() function
if(document.readyState !== 'loading'){
  go()
}else {
  document.addEventListener('DOMContentLoaded', go)
}
