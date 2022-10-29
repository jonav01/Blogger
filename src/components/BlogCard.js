import "./BlogCard.css";
import React from "react";
import BlogCardHolder from "./BlogCardHolder";
import { blogData } from "../assets/data";
function BlogCard() {
  return (
    <section className="blogCards">
      {blogData.map((data) => {
        return (
          <BlogCardHolder
            heading={data.heading}
            tag={data.tags}
            content={data.content}
            author={data.author}
            img={data.image}
            time={data.estimated_time}
          />
        );
      })}
    </section>
  );
}

export default BlogCard;
