import React, { useState } from 'react';
import './blogmain.css';
import BlogFAB from './BlogFAB'; // Import the BlogFAB component
import { useBlog } from '../../context/BlogContext'; // Import useBlog
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Blogmain = () => {
  const { posts } = useBlog();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('latest');

  const handleFilterChange = (category) => {
    setSelectedCategory(prevCategory => (prevCategory === category ? 'ALL' : category));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const handleCardClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchLower) ||
                          post.description.toLowerCase().includes(searchLower) ||
                          post.category.toLowerCase().includes(searchLower) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchLower));
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOption === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'popular') {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <div className="blog">
      <div className="inner">
        <div className="search-sort-bar">
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="검색어를 입력하세요" 
            className="search-input" 
          />
          <div className="sort-options">
            <button 
              className={`sort-button ${sortOption === 'latest' ? 'active' : ''}`} 
              onClick={() => handleSortChange('latest')}
            >
              최신순
            </button>
            <button 
              className={`sort-button ${sortOption === 'popular' ? 'active' : ''}`} 
              onClick={() => handleSortChange('popular')}
            >
              인기순
            </button>
          </div>
        </div>
        <div className="filter">
          <button className={`filter-button ${selectedCategory === 'ALL' ? 'active' : ''}`} onClick={() => handleFilterChange('ALL')}>ALL</button>
          <button className={`filter-button ${selectedCategory === '컴퓨터 기초' ? 'active' : ''}`} onClick={() => handleFilterChange('컴퓨터 기초')}>컴퓨터 기초</button>
          <button className={`filter-button ${selectedCategory === '웹' ? 'active' : ''}`} onClick={() => handleFilterChange('웹')}>웹</button>
          <button className={`filter-button ${selectedCategory === '시스템' ? 'active' : ''}`} onClick={() => handleFilterChange('시스템')}>시스템</button>
          <button className={`filter-button ${selectedCategory === '리버싱' ? 'active' : ''}`} onClick={() => handleFilterChange('리버싱')}>리버싱</button>
          <button className={`filter-button ${selectedCategory === '암호학' ? 'active' : ''}`} onClick={() => handleFilterChange('암호학')}>암호학</button>
          <button className={`filter-button ${selectedCategory === '포렌식' ? 'active' : ''}`} onClick={() => handleFilterChange('포렌식')}>포렌식</button>
        </div>
        <div className="post-grid">
          {sortedPosts.map((post, index) => (
            <div className="post-card" key={index} onClick={() => handleCardClick(post.id)}>
              <img src={post.imgUrl} alt={post.title} className="post-image" />
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">{post.description}</p>
                <div className="post-tags">
                  {post.tags.map((tag, index) => (
                    <span className="post-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogFAB /> {/* Include the BlogFAB component */}
    </div>
  );
}

export default Blogmain;
