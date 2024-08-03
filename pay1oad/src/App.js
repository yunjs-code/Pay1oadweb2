import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Background from './component/main/Background';
import Description from './component/main/contents/Description';
import Description1 from './component/main/contents/Description1';
import Blogmain from './component/blog/blogmain'; // Import the Blog component
import Ctf from './component/main/contents/Ctf';
import Contact from './component/main/contents/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Background />
              <Description />
              <Description1 />
              <Ctf />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<Blogmain />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
