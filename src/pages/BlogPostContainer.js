// BlogContainer.js
import React from 'react';
import './BlogContainer.css';

const BlogPostContainer = ({ imageUrl, title, content, author, date }) => {
    return (
        <div className="blog-post-container">
            <h2>{title}</h2>
            <p>Por {author} - {new Date(date).toLocaleDateString()}</p>
            {imageUrl && <img src={imageUrl} alt={title} className="blog-post-image" />}
            <p>{content}</p>
        </div>
    );
};

export default BlogPostContainer;
