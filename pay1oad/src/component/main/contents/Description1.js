import React from 'react';
import './Description1.css';

const Description1 = () => {
  return (
    <div className="description1-container">
      <div className="card">
        <img src="/path/to/your/image1.png" alt="" />
        <div className="text-overlay">
          <span className="label">경험</span>
          <h2>보안 경험이 없어도 누구나 </h2>
          <p>
            다양한 스터디 
          </p>
        </div>
      </div>
      <div className="card">
        <img src="/path/to/your/image2.png" alt="" />
        <div className="text-overlay">
          <span className="label">성장</span>
          <h2>다양한 외부 행사 참여</h2>
          <p>
            코드게이드 등 다양한 보안 행사 참여
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description1;
