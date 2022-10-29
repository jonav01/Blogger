import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
// import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Write from "./pages/Write/Write";
import Setting from "./pages/Setting/Setting";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
