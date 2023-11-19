import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
