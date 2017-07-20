import React from 'react';
import InputLine from './InputLine';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo, handleToggleTodo,handleRemoveButton } from '../actions/index';

let id = 0;

let TodoApp =({todos, addTodoClick, toggleTodoClick, removeClick}) => {

    return (
        <div>
        {/* leave this alone for now */}
        <InputLine
            addTodo={(text) => addTodoClick(id++, text)}
        />
        <TodoList
            todos={todos}
            handleToggleTodo={(id) => toggleTodoClick(id)}
            handleRemove={(id) => removeClick(id) }
        />
        </div>
    );
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodoClick: (id, task) => {
      dispatch(addTodo(id, task))
    },
    toggleTodoClick: (id) => {
       dispatch(handleToggleTodo(id))
    },
    removeClick: (id) => {
      dispatch(handleRemoveButton(id))
    }
  }
}


TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);

export default TodoApp;
