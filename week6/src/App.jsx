import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([
    
  ]);

  const tambahTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const hapusTodo = (index) => {
    const todoBaru = todos.filter((_, i) => i !== index);
    setTodos(todoBaru);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🎀 My Cute Activity List 🎀</h1>
        <p>Catat semua kegiatanmu hari ini </p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tulis kegiatan baru..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") tambahTodo();
            }}
          />

          <button onClick={tambahTodo}>
            ➕ Tambah
          </button>
        </div>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>

            <button
              className="done-btn"
              onClick={() => hapusTodo(index)}
            >
              ✅ Selesai
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;