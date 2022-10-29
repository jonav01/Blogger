import "./blog.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import SinglePost from "../../components/SinglePost/SinglePost";

function Blog() {
  return (
    <div className="single">
      <Sidebar />
      <SinglePost />
    </div>
  );
}

export default Blog;
