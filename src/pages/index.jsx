import posts from "../posts.json";
import Articles from "../components/Articles";
function Homepage() {
  return (
    <>
      <h1>Simple Blog</h1>
      {posts.map((blog) => (
        <Articles title={blog.title} tags={blog.tags} date={blog.date} />
      ))}
    </>
  );
}

export default Homepage;
