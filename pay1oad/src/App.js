import React from 'react';
import './App.css';
import Header from './component/header/Header';
import Background from './component/main/Background';
import Description from './component/main/contents/Description';
import Description1 from './component/main/contents/Description1';
import Blogmain from './component/blog/blogmain'; // Import the Blog component
import Ctf from './component/main/contents/Ctf';
import Contact from './component/main/contents/Contact';
import WritePost from './component/blog/WritePost'; // Import the WritePost component
import PostDetail from './component/blog/PostDetail'; // Import the PostDetail component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext'; // Import BlogProvider

const App = () => {
  return (
    <Router>
      <BlogProvider>
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
            <Route path="/write-post" element={<WritePost />} />
            <Route path="/post/:postId" element={<PostDetail />} /> {/* Add this route */}
          </Routes>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;
