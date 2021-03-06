import React from 'react';

// class Todo extends React.Component {
//   render() {
//     return (
//       <li>
//         <span onClick={() => this.props.toggleTodo()}>
//           {this.props.completed ? <strike> {this.props.task}</strike> : this.props.task}
//         </span>
//       </li>
//     );
//   }
// }

const Todo = ({task, completed, handleOnClick, handleRemoveTodo}) => {

    return (
      <li>
        <button onClick={handleRemoveTodo}> X </button><span onClick={handleOnClick}>
          {completed ? <strike> {task}</strike> : task}
        </span>
      </li>
    );
}

export default Todo;
