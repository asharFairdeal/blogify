import { Button, Card, Image, Typography } from "antd";
import moment from "moment";
import React from "react";
import "./BlogPostDetails.css";
const { Title, Paragraph, Text } = Typography;
function BlogPostDetails({ post }) {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="blog-post-container">
      <Card
        cover={
          <Image
            src={
              post.urlToImage ||
              "https://tse3.mm.bing.net/th?id=OIG2.GR5m.uEWpdQ5LLQWOj9W&pid=ImgGn" ||
              "https://via.placeholder.com/150"
            }
            alt={post.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        }
        actions={[
          <Button
            type="link"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </Button>,
        ]}
      >
        <Title level={2}>{post.title}</Title>
        <Paragraph>{post.description}</Paragraph>
        <Text type="secondary">Author: {post.author || "Unknown"}</Text>
        <br />
        <Text type="secondary">
          Published on: {moment(post.publishedAt).format("MMMM D, YYYY")}
        </Text>
      </Card>
    </div>
  );
}

export default BlogPostDetails;
