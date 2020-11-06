import React, {useState} from 'react';

const BlogPost = (props) => {
  const [showFullText, setShowFullText] = useState(false);

  const title = props.data.title;
  const date = props.data.date;
  const text = props.data.text;


  var textReducer = () => {
    if (text.length <= 400) return text;

    let finalText = text.slice(0,300);
    /* for (let i = 0; i < 300; i++) {
      finalText += text[i];
    } */

    finalText += '... \n \n ...Click here to Read More.';

    return <p onClick={() => {
      setShowFullText(true)
    }}>{finalText}</p>;
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

      <div className="blogpost-content">
        {
        showFullText ? text : textReducer()
        }
        </div>
    </div>
  );
};

export default BlogPost;
