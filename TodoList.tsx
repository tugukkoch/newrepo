import { observer } from "mobx-react";

import storeManager from "./StoreManager";
import { useEffect, useLayoutEffect } from "react";

const TodoList = () => {
  useLayoutEffect(() => {
    console.log("1");
    return () => {
      console.log("3");
    };
  });

  useEffect(() => {
    console.log("2");
    return () => {
      console.log("4");
    };
  });
  console.log("0");

  return (
    <div>
      {storeManager.todoStore.Todos.map((todo) => {
        const { id, title, done } = todo;
        return (
          <div key={id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => storeManager.todoStore.toggleTodo(id)}
            />
            <span className={done ? "done" : ""}>{title}</span>
            <button onClick={() => storeManager.todoStore.deleteTodo(id)}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default observer(TodoList);
