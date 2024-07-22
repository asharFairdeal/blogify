// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPostList from "../component/BlogPostList/BlogPostList";
import Filter from "../component/Filter/Filter";
import Header from "../component/Header/Header";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const itemsPerPage = 8;
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("");

  const getAllPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${itemsPerPage}&page=${currentPage}`,
        {
          headers: {
            "X-Api-Key": process.env.REACT_APP_API_KEY,
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      setPosts(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("An error occurred while fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, [currentPage, country, category]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCountryChange = (value) => {
    setCountry(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleBack = () => {
    console.log("Back button clicked");
  };

  return (
    <>
      <Header
        showBackButton={false}
        showRightSection={true}
        onBack={handleBack}
        filters={
          <Filter
            country={country}
            category={category}
            handleCountryChange={handleCountryChange}
            handleCategoryChange={handleCategoryChange}
          />
        }
      />
      <BlogPostList
        posts={posts}
        handlePageChange={handlePageChange}
        loading={loading}
        totalResults={totalResults}
        currentPage={currentPage}
        error={error}
        country={country}
        category={category}
        setCountry={setCountry}
        setCategory={setCategory}
      />
    </>
  );
};

export default BlogList;
