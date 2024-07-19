import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Background from './component/main/Background';
import Description from './component/main/contents/Description';
import Description1 from './component/main/contents/Description1';
import Blog from './component/main/contents/Blog';
import Recruit from './component/main/contents/Recruit';
import Contact from './component/main/contents/Contact';
import Login from './component/main/contents/Login';

const App = () => {
  return (
    <div className="App">
      <Background />
      <Header /> {/* Background 아래에 Header를 위치시킵니다 */}
      <Description />
      <Description1 />
      <Blog />
      <Recruit />
      <Contact />
      <Login />
    </div>
  );
}

export default App;
