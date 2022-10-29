import "./home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Posts from"../../components/Posts/Posts";

const Home = () => {
  return (
    <>
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </>
  );
};

export default Home;
