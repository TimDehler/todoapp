import React from "react";

function ToDo({ description, done, onChangeTodo, onClickDeleteTodo, index }) {
  return (
    <div>
      <div
        className={
          done
            ? "flex justify-between p-2 items-center bg-green-600 text-white"
            : "flex justify-between p-2 items-center bg-red-500 text-white"
        }
      >
        <h1
          onClick={() => {
            onChangeTodo(index);
          }}
          className="text-lg cursor-pointer"
        >
          {description}
        </h1>
        <button
          className={
            done
              ? "flex justify-between p-2 items-center bg-green-600 text-white"
              : "flex justify-between p-2 items-center bg-red-500 text-white"
          }
          onClick={() => {
            onClickDeleteTodo(index);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default ToDo;
