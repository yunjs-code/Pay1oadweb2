import React from 'react';
import './Ctf.css';

const Ctf = () => {
  const stats = [
    { label: '운영 기간', value: '7년', icon: '⏰' },
    { label: '운영 기수', value: '7기', icon: '🏁' },
    { label: '현재 활동 회원', value: '30명', icon: '🏃‍♂️' },
    { label: '누적 활동 인원', value: '100+명', icon: '👩‍💼' },
    { label: '문제수', value: '55+개', icon: '📱' },
    { label: '음...', value: '378,658', icon: '⬇️' },
  ];

  return (
    <div className="ctf-container">
      <div className="inner">
        <h1>CTF 지표</h1>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-label">
                {stat.label} {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ctf;
