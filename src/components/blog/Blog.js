import React from 'react';
import BlogFeed from './BlogFeed';
import RightBar from './RightBar';
import CategoryMenu from './CategoryMenu';

const Blog = (props) => {
  return (
    <div className="blog-container">
      <div className="blog-title">
        <h1>Blog</h1>
      </div>
      <div className="separator"></div>
      {/* <CategoryMenu /> */}
      <div className="blog-containermain">
        <BlogFeed key={props.location.search} location={props.location} />
        {
          // <RightBar />
        }
      </div>
    </div>
  );
};

export default Blog;
