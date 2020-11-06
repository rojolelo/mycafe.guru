import React, {useState} from 'react';
import {Link} from "react-router-dom";


const BlogPagination = (props) => {
    const totalPages = props.totalPages;
    const currentPage = props.currentPage;

    const BeforeButton = () => {
        if (currentPage === 1 || currentPage < 2) return null;
        return (
            <Link to={`/blog?page=${parseInt(currentPage)-1}`} className="pagination-button" >
                Back
            </Link>
        )
    }

    const AfterButton = () => {
        if (currentPage == totalPages || currentPage > totalPages) return null;
        return (
            <Link to={`/blog?page=${parseInt(currentPage)+1}`}
            className="pagination-button">
                Next
            </Link>
        )
    }

    if (!totalPages) return null;

    return ( 
        <div className='blog-pagination'>
            {BeforeButton()}
            <span
            className="pagination-button">{currentPage}</span>
            {AfterButton()}
        </div>
     );
}
 
export default BlogPagination;