import React, { useState } from 'react';
import './BlogFAB.css';
import { FaEnvelope, FaTimes, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlogFAB = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleFAB = () => {
    setIsExpanded(!isExpanded);
  };

  const navigateToWritePost = () => {
    navigate('/write-post');
  };

  return (
    <div className="fab-container">
      {isExpanded && (
        <>
          <div className="fab fab-email" onClick={navigateToWritePost}><FaEnvelope /></div>
          <div className="fab fab-close" onClick={toggleFAB}><FaTimes /></div>
        </>
      )}
      {!isExpanded && (
        <div className="fab fab-main" onClick={toggleFAB}><FaPlus /></div>
      )}
    </div>
  );
};

export default BlogFAB;
