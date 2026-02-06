import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          setPosts(data);
          setLoading(false);
        });
    }, 5000);
  }, []);

  const removePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, loading, removePost }}>
      {children}
    </PostContext.Provider>
  );
};