import React from 'react';

const BlogPost = (props) => {
  const title = props.data.title;
  const date = props.data.date;
  const img = props.data.img;
  const text = props.data.text;

  var textReducer = () => {
    console.log(text.length);
    if (text.length <= 400) return text;

    let finalText = '';
    for (let i = 0; i < 300; i++) {
      finalText += text[i];
    }

    finalText += '... \n \n ...Click here to Read More.';

    return finalText;
  };

  return (
    <div className="blogpost-container">
      <div className="blogpost-title">
        <h2>{title} </h2>
      </div>
      <div className="separator-little"></div>
      <div className="blogpost-info">
        <p>Date: {date} </p>
      </div>

      <div className="blogpost-content">{textReducer()}</div>
    </div>
  );
};

export default BlogPost;
