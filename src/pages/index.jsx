import { useState } from "react";
import postsData from "../posts.json";
import Articles from "../components/Articles";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPost] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPost(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        // <Articles title={blog.title} tags={blog.tags} date={blog.date} />
        // <Articles {...{ title, tags, date }} key={index} />
        <Articles {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
