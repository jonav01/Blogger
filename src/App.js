import "./App.css";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login/Login";
import Imagecarousel  from "./Imagecarousel";
import About from "./pages/About/About";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
       {/* <Login />  */}
       {/* <Navbar />  */}
       <Navbar/>
       <Imagecarousel />
      
      {/* <About /> */}
    </div>
  );
}

export default App;
