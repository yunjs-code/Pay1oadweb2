import React, { useState } from 'react';
import './Blog.css';

const allProjects = [
  { id: '1', title: 'SecureChat', description: '안전한 메시징을 위한 종단간 암호화 서비스', image: '/path/to/image1.png', tag: 'NEW' },
  { id: '2', title: 'SafePay', description: '안전한 온라인 결제를 위한 이중 인증 서비스', image: '/path/to/image2.png', tag: 'NEW' },
  { id: '3', title: 'PhishGuard', description: '피싱 공격을 방지하는 이메일 필터링 서비스', image: '/path/to/image3.png', tag: 'NEW' },
  { id: '4', title: 'SecureCloud', description: '데이터 유출 방지를 위한 안전한 클라우드 저장소', image: '/path/to/image4.png', tag: 'NEW' },
  { id: '5', title: 'AuthShield', description: '다중 요인 인증으로 계정 보호', image: '/path/to/image5.png', tag: 'NEW' },
  { id: '6', title: 'VulnScan', description: '취약점 스캐닝 및 관리 도구', image: '/path/to/image6.png', tag: 'NEW' },
  { id: '7', title: 'SecureConnect', description: '안전한 원격 접속을 위한 VPN 서비스', image: '/path/to/image7.png', tag: 'NEW' },
  { id: '8', title: 'DataProtector', description: '데이터 암호화 및 백업 솔루션', image: '/path/to/image8.png', tag: 'NEW' },
  { id: '9', title: 'FirewallPlus', description: '고급 방화벽 관리 도구', image: '/path/to/image9.png', tag: 'NEW' },
  { id: '10', title: 'IntrusionAlert', description: '침입 탐지 시스템', image: '/path/to/image10.png', tag: 'NEW' },
  { id: '11', title: 'MalwareScanner', description: '멀웨어 탐지 및 제거 도구', image: '/path/to/image11.png', tag: 'NEW' },
  { id: '12', title: 'PrivacyGuard', description: '개인 정보 보호 솔루션', image: '/path/to/image12.png', tag: 'NEW' },
];

const Blog = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 6);
  };

  const showLess = () => {
    setVisibleProjects(6);
  };

  return (
    <div className="project-container">
      <div className="inner">
        <h1>인기 게시글</h1>
        <div className="project-grid">
          {allProjects.slice(0, visibleProjects).map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <span className="project-tag">{project.tag}</span>
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < allProjects.length ? (
          <button className="load-more-button" onClick={loadMore}>
            더보기
          </button>
        ) : (
          <button className="load-more-button" onClick={showLess}>
            가리기
          </button>
        )}
      </div>
    </div>
  );
}

export default Blog;
