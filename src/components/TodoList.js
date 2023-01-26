/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ToDo from "./ToDo";
import { useState, useEffect } from "react";

const TodoList = () => {
  const [opencount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(() => {
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  const [textInput, settTextInput] = useState("");

  const changeText = (e) => {
    settTextInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, { description: textInput, done: false }];
    setTodos(newTodos);
  };

  const countOpen = () => {
    const doneTodos = todos.filter((item) => {
      return !item.done;
    });
    countOpenTodos(doneTodos.length);
  };

  const changeTodo = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].done) {
      newTodos[index].done = false;
    } else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    console.log("Was called");
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    countOpen();
    localStorage.setItem("items", JSON.stringify(todos));
  }, [todos, countOpen]);

  return (
    <div className="shadow-sm hover:shadow-lg">
      <div className="text-center bg-gray-900 text-white  py-4 font-semibold">
        <h1 className="text-3xl">ToDo's</h1>
        <h2>Offene Todos {opencount}</h2>
        <form className="grid grid-cols-3 py2">
          <input
            type="text"
            onChange={changeText}
            placeholder="New ToDo..."
            className="col-span-2 py-2 text-gray-900"
          ></input>
          <input
            onClick={submit}
            type="submit"
            value="Add Todo"
            className="col-span-1 text-gray-900 bg-gray-200 cursor-pointer"
          ></input>
        </form>
      </div>
      {todos.map((item, index) => {
        return (
          <ToDo
            key={index}
            description={item.description}
            done={item.done}
            index={index}
            onChangeTodo={changeTodo}
            onClickDeleteTodo={deleteTodo}
          ></ToDo>
        );
      })}
    </div>
  );
};

export default TodoList;
