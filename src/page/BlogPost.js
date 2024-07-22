import React from "react";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { Card, Button, Typography, Image } from "antd";
import Header from "../component/Header/Header";
import BlogPostDetails from "../component/BlogPostDetail/BlogPostDetails";

const { Title, Paragraph, Text } = Typography;

function BlogPost() {
  const location = useLocation();
  const { post } = location.state || {};

  const handleBack = () => {
    window.history.back();
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header showBackButton={true} onBack={handleBack} />
      <BlogPostDetails post={post} />
    </>
  );
}

export default BlogPost;
