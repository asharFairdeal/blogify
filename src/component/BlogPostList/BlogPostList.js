import React, { useEffect, useState } from "react";
import { List, Spin, Alert, Pagination, Card, Row, Col, Select } from "antd";
import axios from "axios";
import "./BlogPostList.css"; // Import the custom CSS file
import moment from "moment";
import BlogPostItem from "../BlogPostItem/BlogPostItem";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";

const { Meta } = Card;
const { Option } = Select;

function BlogPostList({
  posts,
  loading,
  error,
  totalResults,
  currentPage,
  itemsPerPage,
  handlePageChange,
}) {
  return (
    <>
      <div
        className="blog-post-list"
        style={{ padding: "20px", marginTop: "60px" }}
      >
        {loading ? (
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              marginTop: "50px",
            }}
          >
            <Spin tip="Loading posts..." size="large" />
          </div>
        ) : error ? (
          <Alert type="error" message={error} />
        ) : (
          <>
            <Row gutter={[16, 16]}>
              {posts.map((post, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <BlogPostItem post={post} />
                </Col>
              ))}
            </Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                current={currentPage}
                total={totalResults}
                pageSize={itemsPerPage}
                onChange={handlePageChange}
                style={{ marginTop: "20px", textAlign: "center" }}
                showSizeChanger={false}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default BlogPostList;
