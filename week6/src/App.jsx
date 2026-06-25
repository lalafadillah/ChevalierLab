import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const [completed, setCompleted] = useState(0);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  const [guess, setGuess] = useState("");

  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  const [message, setMessage] = useState("");

  const quotes = [
    "🌸 Sedikit demi sedikit tetap progress",
    "💻 Coding hari ini = sukses masa depan",
    "🎀 Jangan menyerah sebelum mencoba",
    "✨ Konsisten lebih penting daripada sempurna",
    "🚀 Fokus pada proses, hasil akan mengikuti"
  ];

  const [quote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tambahTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const hapusTodo = (index) => {
    const todoBaru = todos.filter((_, i) => i !== index);

    setTodos(todoBaru);

    setCompleted(completed + 1);
  };

  const cekAngka = () => {
    const angka = parseInt(guess);

    if (angka === randomNumber) {
      setMessage("🎉 Benar! Kamu Hebat!");

      setRandomNumber(
        Math.floor(Math.random() * 10) + 1
      );
    } else if (angka > randomNumber) {
      setMessage("📉 Terlalu Besar");
    } else {
      setMessage("📈 Terlalu Kecil");
    }
  };

  const progress =
    todos.length + completed === 0
      ? 0
      : (completed / (todos.length + completed)) * 100;

  return (
    <div className="container">

      <div className="header">
        <h1>🎀 My Cute Activity Dashboard 🎀</h1>
        <p>Catat semua kegiatanmu hari ini 🌸</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Tulis kegiatan baru..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                tambahTodo();
              }
            }}
          />

          <button onClick={tambahTodo}>
            ➕ Tambah
          </button>
        </div>
      </div>

      <div className="dashboard">

        <div className="card">
          <h3>🕒 Jam</h3>
          <p>{time}</p>
        </div>

        <div className="card">
          <h3>📊 Statistik</h3>
          <p>Total Tugas: {todos.length}</p>
          <p>Selesai: {completed}</p>
        </div>

        <div className="card">
          <h3>✨ Motivasi</h3>
          <p>{quote}</p>
        </div>

      </div>

      <div className="progress-title">
        Progress Kegiatan
      </div>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>

            <button
              className="done-btn"
              onClick={() =>
                hapusTodo(index)
              }
            >
              ✅ Selesai
            </button>
          </li>
        ))}
      </ul>

      <div className="game-box">

        <h2>🎮 Tebak Angka 1 - 10</h2>

        <input
          type="number"
          placeholder="Masukkan angka"
          value={guess}
          onChange={(e) =>
            setGuess(e.target.value)
          }
        />

        <button onClick={cekAngka}>
          Tebak
        </button>

        <p>{message}</p>

      </div>

    </div>
  );
}

export default App;