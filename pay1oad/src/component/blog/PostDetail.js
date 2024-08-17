import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import './PostDetail.css';
import { FaHeart } from 'react-icons/fa';

const PostDetail = () => {
  const { postId } = useParams();
  const { posts } = useBlog();
  const post = posts.find(p => p.id === parseInt(postId));
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(8); // 초기 좋아요 수

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post-detail-container">
      <div className="post-header">
        <div className="post-author-info">
          <img src="path/to/profile-image.jpg" alt="Author" className="author-avatar" />
          <div>
            <div className="author-name">test1</div>
            <div className="post-date">06.10</div>
          </div>
        </div>
      </div>
      <h1>{post.title}</h1>
      <img src={post.imgUrl} alt={post.title} className="post-detail-image" />
      <p className="post-content">{post.description}</p>
      <div className="post-detail-tags-like">
        <div className="post-detail-tags">
          {post.tags.map((tag, index) => (
            <span className="post-detail-tag" key={index}>{tag}</span>
          ))}
        </div>
        <button className="like-button" onClick={handleLikeClick}>
          <FaHeart className={liked ? 'liked' : 'not-liked'} /> 좋아요 {likes}
        </button>
      </div>
      <div className="comments-section">
        <h2>{comments.length}개의 댓글</h2>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <div className="comment-author">test2</div>
            <div className="comment-date">06.10</div>
            <p>{comment}</p>
          </div>
        ))}
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 작성해 보세요."
            className="comment-input"
          />
          <button type="submit" className="comment-submit-button">게시</button>
        </form>
      </div>
    </div>
  );
};

export default PostDetail;
