import React, { useState } from 'react';
import './WritePost.css';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext'; // Import useBlog

const WritePost = () => {
  const { addPost } = useBlog();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    title: '',
    content: '',
    category: '컴퓨터 기초', // Default category
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 파일이 선택되지 않은 경우에 대한 처리
    const imageUrl = formData.file ? URL.createObjectURL(formData.file) : 'default-image-url.jpg';
    
    const newPost = {
      title: formData.title,
      description: formData.content,
      imgUrl: imageUrl,
      tags: ['#새글'],
      category: formData.category,
      date: new Date().toISOString().split('T')[0],
      popularity: 0,
    };
    addPost(newPost);
    navigate('/blog');
  };

  return (
    <div className="write-post-container">
      <h1>게시판</h1>
      <form className="write-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요.."
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요.."
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요.."
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">카테고리</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="컴퓨터 기초">컴퓨터 기초</option>
            <option value="웹">웹</option>
            <option value="시스템">시스템</option>
            <option value="리버싱">리버싱</option>
            <option value="암호학">암호학</option>
            <option value="포렌식">포렌식</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="내용을 입력하세요.."
          />
        </div>
        <div className="form-group">
          <input type="file" id="file" onChange={handleFileChange} />
          <label htmlFor="file" className="file-label">파일 선택</label>
          <span className="file-selected">
            {formData.file ? formData.file.name : '선택된 파일 없음'}
          </span>
        </div>
        <button type="submit" className="submit-button">작성</button>
      </form>
    </div>
  );
};

export default WritePost;
