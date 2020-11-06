import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import axios from 'axios';
import BlogPagination from './BlogPagination';

const BlogFeed = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(false);
  const [currentPage, setCurrentPage] = useState(parseCurrentPage());
  const [category, setCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  function parseCurrentPage() {
    if (props.location.search.length === 0) return 1;
    let wholeString = props.location.search.split('?').slice(1);
    let separatedValues = wholeString[0].split('=');
    let currentPage = separatedValues[1];
    return currentPage;
  }

  const path = props.location.pathname;

  useEffect(() => {
    axios
      .post('/api/blog', { currentPage })
      .then((res) => {
        console.log('Axios BlogFeed useEffect:');
        console.log(res);
        setArticles(res.data.articles);
        setTotalPages(res.data.totalOfPages);
        setCurrentPage(res.data.currentPage);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setShowError(true);
      });
  }, []);

  if (path === '/blog' && category !== 'all') {
    setCategory('all');
  } else if (path == '/blog/news' && category != 'news') {
    setCategory('news');
  } else if (path == '/blog/tips' && category != 'tips') {
    setCategory('tips');
  } else if (path == '/blog/misc' && category != 'misc') {
    setCategory('misc');
  }

  /* const filteredPosts = posts.filter((post) => {
    if (category === 'all') return true;
    if (post.category == category) return true;
    return false;
  }); */

  return (
    <React.Fragment>
      <div className="blogfeed-container">
        {isLoading ? <div className="blogfeed-loading">Loading...</div> : null}

        {showError ? (
          <div className="blogfeed-error">
            I'm sorry. There was an error loading the posts.
          </div>
        ) : null}

        {articles.map((article, key) => {
          return <BlogPost data={article} key={key} />;
        })}
      </div>
      <BlogPagination currentPage={currentPage} totalPages={totalPages} />
    </React.Fragment>
  );
};

export default BlogFeed;
