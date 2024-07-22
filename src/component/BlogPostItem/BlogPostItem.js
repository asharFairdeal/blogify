import { Card } from "antd";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";

function BlogPostItem({ post }) {
  const { Meta } = Card;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${post.title.replace(/\s+/g, "-")}`, { state: { post } });
  };
  return (
    <Card
      onClick={handleNavigation}
      className="blog-post-card"
      hoverable
      cover={
        <img
          alt="example"
          src={
            post.urlToImage ||
            "https://tse3.mm.bing.net/th?id=OIG2.GR5m.uEWpdQ5LLQWOj9W&pid=ImgGn" ||
            "https://via.placeholder.com/150"
          }
        />
      }
    >
      <Meta
        title={post.title}
        description={post.description || "No description available"}
      />
      <div className="blog-post-meta">
        <div className="author">Author: {post?.author ?? "Unknown"}</div>
        {post.publishedAt && (
          <div className="date">
            {moment(post?.publishedAt).format("MMMM D, YYYY")}
          </div>
        )}
      </div>
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", marginTop: "10px" }}
      >
        Read more
      </a>
    </Card>
  );
}

export default BlogPostItem;
