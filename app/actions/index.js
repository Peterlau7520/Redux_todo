 // typical action shape for ADD_TODO
 // const typicalTodoAction = {
 //   type: 'ADD_TODO'
 //   id: 5,
 //   task: 'Build A Todo App',
 //   completed: false
 // }
 // addTodo(5,'Build A Todo App') 

 // returns the todo action above
 function addTodo(id,task) {
 return {
  type: 'ADD_TODO',
  id,
  task,
  completed: false
 };
}

function handleToggleTodo(id){

	return {
		type: 'TOGGLE',
		id
	}

}

function handleRemoveButton(id){
	return {
		type: 'REMOVE',
		id
	}

}
export {addTodo, handleToggleTodo, handleRemoveButton}


