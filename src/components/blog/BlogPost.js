import React from 'react';

const BlogPost = (props) => {
  const title = props.data.title;
  const date = props.data.date;
  const img = props.data.img;
  const text = props.data.text;
  return (
    <div className="blogpost-container">
      <div className="blogpost-title">
        <h2>{title} </h2>
      </div>
      <div className="separator-little"></div>
      <div className="blogpost-info">
        <p>Date: {date} </p>
      </div>

      <div className="blogpost-content">{text}</div>
    </div>
  );
};

export default BlogPost;
