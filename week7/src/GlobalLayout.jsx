import { Link, Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "#fe49b0f5",
          color: "white",
        }}
      >
        <h1>Cheva Week 9</h1>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "15px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{ color: "white", textDecoration: "none" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#eee",
        }}
      >
        Copyright © 2026
      </footer>
    </>
  );
}