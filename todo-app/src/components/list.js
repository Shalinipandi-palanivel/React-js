import { useEffect, useState } from "react";

const List = (props) => {
  // props  are like argument of a function which pass data from parent to child
  // const todos = [{title: "todo 1"},
  //      {title: "todo 2"},
  //      {title: "todo 3"},
  //      {title: "todo 4"}];

  //we can do two things in state - useState(), one is variable and other is update the variable
  //useState can take default value

  // const[state, setState] = useState();
  const [todos, updateTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();
  const [currentIdx, setCurrentIdx] = useState(-1); //add new todo when we press key enter else if we type enter it will change the last added todo

  useEffect(() => {
    // to avoid re-rendering the value of the component and determined to mount the values number of times we want
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const initialData = data.todos.map((todo) => ({
          id: todo.id,
          title: todo.todo,
          completed: todo.completed,
        }));
        updateTodos(initialData);
      });
  }, []); // [] - detemines when or number of times to mount the value

  //Todo items will not render in the dom until and unless we do change in th props or react state
  const handleRandomAdd = (e) => {
    const newTodo = { title: `Todo ${todos.length + 1}` };
    // todos.push(newTodo); //instead of doing this we have
    // updateTodos(todos); // this is to render the todoitem in the dom
    updateTodos((oldTodos) => [...oldTodos, newTodo]); //updateTodos will give a callback of oldTodos
    // updateTodos(updatefn);
  };

  const handleAdd = () => {
    const newTodo = { title: newTodos };
    updateTodos((oldTodos) => [...oldTodos, newTodo]);
    setNewTodos(() => "");
  };

  const handleTodoChange = (e) => {
    setNewTodos(() => e.target.value);
  };

  const handleDelete = (idx) => (e) => {
    updateTodos((oldTodos) => {
      const updatedTodos = oldTodos.slice();
      updatedTodos.splice(idx, 1);
      return updatedTodos;
    });
  };

  const handleEdit = (idx) => (e) => {
    setNewTodos(() => todos[idx].title);
    setCurrentIdx(() => idx);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (currentIdx === -1) {
        handleAdd();
        return;
      }
      updateTodos((oldTodos) => {
        const updatedTodos = [...oldTodos];
        updatedTodos.splice(currentIdx, 1, {
          ...updatedTodos[currentIdx],
          title: newTodos,
        });
        return updatedTodos;
      });
      setNewTodos(() => "");
      setCurrentIdx(-1);
    }
  };

  const handleCompleted = (idx) => () => {
    updateTodos((oldTodos) => {
      const updatedTodos = [...oldTodos];
      updatedTodos.splice(idx, 1, {
        ...updatedTodos[idx],
        completed: !updatedTodos[idx].completed,
      });
     
    const completedCount = updatedTodos.filter((item) => item.completed).length;
    props.updateCount(completedCount); 
    return updatedTodos; 

    // const completedCount = updatedTodos.reduce((acc,item) => {
    //   if(item.completed){
    //     acc++;
    //   }
    //   return acc;
    // },0);
    // props.updateCount(completedCount);
    // return updatedTodos;
    });
  };

  return (
    // jsx have only one root level , so the elements are wrapped in one root level div container

    <div>
      
      <input
        value={newTodos}
        onChange={handleTodoChange}
        placeholder="Add new item"
        onKeyDown={handleEnter}
      />
      {newTodos}
      <ul className="todo-list">
        {todos.map((todo, idx) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleCompleted(idx)}
              />
              {idx}: {todo.title}
              <span onClick={handleEdit(idx)}>Edit</span>
              <span className="cross" onClick={handleDelete(idx)}>
                X
              </span>
            </li>
          );
        })}
      </ul>
      <button onClick={handleRandomAdd}> Add a Random todo</button>
      <button onClick={handleAdd}>Add todo</button>
    </div>
  );
};

export default List;
