import { useState } from "react";
import postsData from "../posts.json";
import Articles from "../components/Articles";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPost] = useState(postsData);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPost(filteredPosts);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map(({ title, tags, date }, index) => (
        // <Articles title={blog.title} tags={blog.tags} date={blog.date} />
        <Articles {...{ title, tags, date }} key={index} />
        // <Articles {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
