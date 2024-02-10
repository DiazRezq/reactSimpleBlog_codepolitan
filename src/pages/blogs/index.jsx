import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>Blog Post</h2>
      {posts.map((item, index) => (
        <div key={index}> - {item.title}</div>
      ))}
    </>
  );
}

export default Blog;
