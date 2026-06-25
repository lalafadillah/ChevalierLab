import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ======================
  // TODO LIST
  // ======================

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(0);

  const tambahTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const hapusTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);

    setTodos(newTodos);
    setCompleted(completed + 1);
  };

  // ======================
  // CLOCK
  // ======================

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ======================
  // QUOTES
  // ======================

  const quotes = [
    "🌸 Sedikit demi sedikit tetap progress",
    "💻 Coding hari ini = sukses masa depan",
    "🎀 Jangan menyerah sebelum mencoba",
    "✨ Konsisten lebih penting daripada sempurna",
    "🚀 One step closer every day"
  ];

  const [quote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  // ======================
  // MINI PACMAN
  // ======================

  const SIZE = 5;

  const createBoard = () => {
    let board = [];

    for (let r = 0; r < SIZE; r++) {
      let row = [];

      for (let c = 0; c < SIZE; c++) {
        row.push("coin");
      }

      board.push(row);
    }

    board[0][0] = "pacman";
    board[4][4] = "ghost";

    return board;
  };

  const [board, setBoard] = useState(createBoard());

  const [pacman, setPacman] = useState({
    row: 0,
    col: 0
  });

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  const restartGame = () => {
    setBoard(createBoard());

    setPacman({
      row: 0,
      col: 0
    });

    setScore(0);

    setGameOver(false);
  };

  useEffect(() => {
    const movePacman = (e) => {
      if (gameOver) return;

      let { row, col } = pacman;

      if (e.key === "ArrowUp" && row > 0)
        row--;

      if (e.key === "ArrowDown" && row < SIZE - 1)
        row++;

      if (e.key === "ArrowLeft" && col > 0)
        col--;

      if (e.key === "ArrowRight" && col < SIZE - 1)
        col++;

      const ghostRow = 4;
      const ghostCol = 4;

      if (
        row === ghostRow &&
        col === ghostCol
      ) {
        setGameOver(true);
      }

      let newBoard = board.map((r) => [...r]);

      if (
        newBoard[row][col] === "coin"
      ) {
        setScore((prev) => prev + 10);
      }

      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          if (
            newBoard[r][c] === "pacman"
          ) {
            newBoard[r][c] = "";
          }
        }
      }

      newBoard[row][col] = "pacman";

      newBoard[4][4] = "ghost";

      setBoard(newBoard);

      setPacman({
        row,
        col
      });
    };

    window.addEventListener(
      "keydown",
      movePacman
    );

    return () =>
      window.removeEventListener(
        "keydown",
        movePacman
      );
  }, [pacman, board, gameOver]);

  const totalTask =
    todos.length + completed;

  const progress =
    totalTask === 0
      ? 0
      : (completed / totalTask) * 100;

  return (
    <div className="container">

      <div className="header">
        <h1>
          🎀 Student Productivity Dashboard 🎀
        </h1>

        <p>
          Catat kegiatan dan bermain
          mini Pac-Man!
        </p>
      </div>

      {/* DASHBOARD */}

      <div className="dashboard">

        <div className="card">
          <h3>🕒 Jam</h3>
          <p>{time}</p>
        </div>

        <div className="card">
          <h3>📊 Statistik</h3>

          <p>
            Total Task: {totalTask}
          </p>

          <p>
            Selesai: {completed}
          </p>
        </div>

        <div className="card">
          <h3>✨ Motivasi</h3>
          <p>{quote}</p>
        </div>

      </div>

      {/* PROGRESS */}

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>

      {/* TODO */}

      <div className="todo-section">

        <h2>📝 To Do List</h2>

        <div className="input-group">

          <input
            type="text"
            placeholder="Tambah kegiatan..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter")
                tambahTodo();
            }}
          />

          <button onClick={tambahTodo}>
            ➕ Tambah
          </button>

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

      </div>

      {/* PACMAN */}

      <div className="game-section">

        <h2>🎮 Mini Pac-Man</h2>

        <p>
          Gunakan tombol arah
          ↑ ↓ ← →
        </p>

        <h3>
          🪙 Score: {score}
        </h3>

        {gameOver && (
          <div className="game-over">

            <h2>
              👻 Game Over!
            </h2>

            <button
              onClick={restartGame}
            >
              🔄 Main Lagi
            </button>

          </div>
        )}

        <div className="board">

          {board.flat().map(
            (cell, index) => (
              <div
                key={index}
                className="cell"
              >
                {cell === "pacman" &&
                  "🟡"}

                {cell === "ghost" &&
                  "👻"}

                {cell === "coin" &&
                  "🪙"}
              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default App;