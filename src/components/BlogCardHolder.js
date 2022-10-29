import "./BlogCardHolder.css";
function BlogCardHolder({ heading, tag, time, author, img , content }) {
  return (
    <div className="blogCardHolder">
      <div className="blogCardImageContainer">
        <img src={img} alt="blogImage" className="blogCardImage" />
        <figcaption className="blogImageCaption">{author}</figcaption>
      </div>
      <div className="blogCardContent">
        <div className="blogCardFeatures">
          <span className="blogCardFeatures__tag">{tag}</span>
          <span className="blogCardFeatures__time">{time}</span>
        </div>
        <h1 className="blogCardHeading">{heading}</h1>
        <p className="blogCardContent__paragraph">{content}</p>
      </div>
    </div>
  );
}

export default BlogCardHolder;
