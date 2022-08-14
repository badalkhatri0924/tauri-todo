import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([] as { text: string; isDone: boolean }[]);
  const [inputText, setInputText] = useState("" as string);
  const inputTextboxId = "todo-input";

  return (
    <div className="App">
      <div>
        <a href="https://badalkhatri.com" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>
        Tauri TODO by{" "}
        <a href="https://badalkhatri.com" target="_blank">
          Badal Khatri
        </a>
      </h1>
      <div className="card">
        <input
          type={"text"}
          id={inputTextboxId}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
        />
        <button
          onClick={() => {
            if (inputText) {
              setTodos([
                ...todos,
                {
                  text: inputText,
                  isDone: false,
                },
              ]);
              setInputText("");
            }
          }}
        >
          ADD
        </button>

        {todos.length ? (
          todos.map((todo, index) => (
            <p key={index}>
              <input
                type={"checkbox"}
                checked={todo.isDone}
                onChange={(e) => {
                  const tempTODO = [...todos];
                  tempTODO[index].isDone = e.target.checked;
                  setTodos(tempTODO);
                }}
                style={{
                  padding: "5px",
                }}
              />
              {todo.text} {`${todo.isDone}`}
            </p>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
