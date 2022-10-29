import "./App.css";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login/Login";
import Imagecarousel from "./Imagecarousel";
// import About from "./pages/About/About";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
function App() {
  return (
    <div className="App">
      {/* <Login />  */}
      {/* <Navbar />  */}
      <Navbar />
      <Imagecarousel />
      <BlogCard />
      {/* <About /> */}
    </div>
  );
}

export default App;
