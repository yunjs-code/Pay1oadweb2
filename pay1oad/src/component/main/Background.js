import React, { useEffect, useRef } from 'react';
import './Background.css';
import { ReactComponent as BackgroundSvg } from './Background.svg';

const Background = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      const svgElement = svgRef.current;
      if (svgElement) {
        const circle = svgElement.querySelector('circle');
        if (circle) {
          let pos = 0;
          const animateFrame = () => {
            pos = (pos + 1) % 800;
            circle.setAttribute('cx', pos);
            requestAnimationFrame(animateFrame);
          };
          animateFrame();
        }
      }
    };

    // Small delay to ensure the SVG is fully loaded
    const timer = setTimeout(() => {
      animate();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="background">
      <BackgroundSvg className="animated-svg" ref={svgRef} />
      <div className="header-text">Pay1oad 8 RECRUITING</div>
      <div className="content">
        <h3>
          세상을 바꿀<br />
          보안의 시작
        </h3>
      </div>
    </div>
  );
};

export default Background;