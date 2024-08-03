// src/component/blog/blogmain.js

import React, { useState } from 'react';
import './blogmain.css';
import BlogFAB from './BlogFAB'; // Import the BlogFAB component

const Blogmain = () => {
  const posts = [
    {
      title: "FULLCAR",
      description: "신원이 검증된 사람들과 즐겁게 카풀해요!",
      imgUrl: "path/to/fullcar-image.jpg", // replace with the actual path to the image
      tags: ["#237기", "#컴퓨터 기초"],
      category: "컴퓨터 기초",
      date: "2023-08-01",
      popularity: 10
    },
    {
      title: "YEOBEE",
      description: "여행경비 기록부터 정산까지",
      imgUrl: "path/to/yeobee-image.jpg", // replace with the actual path to the image
      tags: ["#237기", "#웹"],
      category: "웹",
      date: "2023-08-03",
      popularity: 20
    },
    {
      title: "COFFICE",
      description: "",
      imgUrl: "path/to/coffice-image.jpg", // replace with the actual path to the image
      tags: ["#227기", "#시스템"],
      category: "시스템",
      date: "2023-08-02",
      popularity: 30
    },
    {
      title: "SOMETHING ANDROID",
      description: "",
      imgUrl: "path/to/android-image.jpg", // replace with the actual path to the image
      tags: ["#238기", "#리버싱"],
      category: "리버싱",
      date: "2023-07-30",
      popularity: 5
    },
    {
      title: "ANOTHER POST",
      description: "",
      imgUrl: "path/to/image.jpg", // replace with the actual path to the image
      tags: ["#239기", "#암호학"],
      category: "암호학",
      date: "2023-07-29",
      popularity: 15
    },
    {
      title: "FORENSICS POST",
      description: "",
      imgUrl: "path/to/image.jpg", // replace with the actual path to the image
      tags: ["#240기", "#포렌식"],
      category: "포렌식",
      date: "2023-07-28",
      popularity: 25
    }
  ];

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
            <div className="post-card" key={index}>
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
