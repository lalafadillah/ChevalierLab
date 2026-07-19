import { Routes, Route } from "react-router-dom";
import GlobalLayout from "./GlobalLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404";

export default function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}