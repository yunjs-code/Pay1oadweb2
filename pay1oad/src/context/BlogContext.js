import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Tech Carpool",
      description: "Join verified tech enthusiasts for a safe and fun carpool experience!",
      imgUrl: "path/to/tech-carpool-image.jpg",
      tags: ["#TechCommunity", "#Beginner"],
      category: "컴퓨터 기초",
      date: "2023-08-01",
      popularity: 10
    },
    {
      id: 2,
      title: "Travel Buddy",
      description: "Track your travel expenses and settle up easily with friends.",
      imgUrl: "path/to/travel-buddy-image.jpg",
      tags: ["#Travel", "#WebApp"],
      category: "웹",
      date: "2023-08-03",
      popularity: 20
    },
    {
      id: 3,
      title: "Cafe Connect",
      description: "A platform to work and network in cafes with like-minded professionals.",
      imgUrl: "path/to/cafe-connect-image.jpg",
      tags: ["#Networking", "#SystemIntegration"],
      category: "시스템",
      date: "2023-08-02",
      popularity: 30
    },
    {
      id: 4,
      title: "Mastering Android",
      description: "From basics to advanced concepts in Android development.",
      imgUrl: "path/to/mastering-android-image.jpg",
      tags: ["#Development", "#Android"],
      category: "리버싱",
      date: "2023-07-30",
      popularity: 5
    },
    {
      id: 5,
      title: "Cryptography Essentials",
      description: "Essential concepts and practical applications of cryptography.",
      imgUrl: "path/to/crypto-essentials-image.jpg",
      tags: ["#Security", "#Cryptography"],
      category: "암호학",
      date: "2023-07-29",
      popularity: 15
    },
    {
      id: 6,
      title: "Forensics 101",
      description: "An introduction to the world of digital forensics.",
      imgUrl: "path/to/forensics-101-image.jpg",
      tags: ["#DigitalForensics", "#Investigation"],
      category: "포렌식",
      date: "2023-07-28",
      popularity: 25
    },
    {
      id: 7,
      title: "Front-End Hacks",
      description: "Tips and tricks for efficient front-end development.",
      imgUrl: "path/to/frontend-hacks-image.jpg",
      tags: ["#WebDevelopment", "#Frontend"],
      category: "프론트엔드",
      date: "2023-08-05",
      popularity: 35
    }
  ]);

  const addPost = (post) => {
    post.id = posts.length + 1; // 새로운 게시글에 고유 ID 부여
    setPosts([post, ...posts]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};
