import React, { useState } from 'react';
import BlogPost from './BlogPost';
import articles from './articles/1.json';

const BlogFeed = (props) => {
  const posts = articles.articles;
  const path = props.location.pathname;
  const [category, setCategory] = useState('all');

  if (path === '/blog' && category !== 'all') {
    setCategory('all');
  } else if (path == '/blog/news' && category != 'news') {
    setCategory('news');
  } else if (path == '/blog/tips' && category != 'tips') {
    setCategory('tips');
  } else if (path == '/blog/misc' && category != 'misc') {
    setCategory('misc');
  }

  const filteredPosts = posts.filter((x) => {
    if (category === 'all') return true;
    if (x.category == category) return true;
    return false;
  });

  return (
    <div className="blogfeed-container">
      {filteredPosts.map((post, key) => {
        return <BlogPost data={post} key={key} />;
      })}
    </div>
  );
};

export default BlogFeed;
