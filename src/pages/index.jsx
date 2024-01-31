import { useState } from "react";
import posts from "../posts.json";
import Articles from "../components/Articles";
function Homepage() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        cari artikel : <input type="text" onChange={changeSearch} />
      </div>
      <small>Ditemukan 0 data dari kata {search}</small>
      {posts.map(({ title, tags, date }, index) => (
        // <Articles title={blog.title} tags={blog.tags} date={blog.date} />
        <Articles {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}

export default Homepage;
