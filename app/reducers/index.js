// Inside app/reducers/index.js
const reducer = (state = [], action) => {
   switch (action.type) {
       // Missing cases
       case 'ADD_TODO':
            // copy new state so no mutations to old state
           const newState = [ ...state ];
           // create the todo from the action object
           const newTodo = {
               id: action.id,
               task: action.task,
               completed: action.completed
           };
           // okay to mutate our own copy
           newState.push(newTodo);
           return newState
       case 'TOGGLE': 
          var new_todos = [];
          [...state].map((todo, index) => {
            if(index === action.id){
                var new_todo = Object.assign({}, todo, {completed: !todo.completed});
                new_todos.push(new_todo);
            }else{
              new_todos.push(todo);
            }
          });
          return new_todos;
       case 'REMOVE':
          var new_todos = [];
          [...state].map((todo, index) => {
            if(index !== action.id){
              new_todos.push(todo);
            }
          })
          return new_todos;
       default:
           return state;
   }
};

export default reducer;