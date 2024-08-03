// src/component/blog/PostModal.js

import React from 'react';
import './PostModal.css';

const PostModal = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{post.title}</h2>
        <img src={post.imgUrl} alt={post.title} className="modal-image" />
        <p>{post.description}</p>
        <div className="modal-tags">
          {post.tags.map((tag, index) => (
            <span className="modal-tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
