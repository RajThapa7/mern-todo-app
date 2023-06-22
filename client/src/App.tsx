import "./App.css";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Todos from "./pages/todos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
