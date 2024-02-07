import { useContext } from "react";
import { GlobalContext } from "../context";
// const ArticleStatus = ({ isNew }) => {
//   return isNew && <span>--Baru</span>;
// };

const NewArticle = () => {
  return <span>--Baru</span>;
};
function Articles(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date:{props.date}, tags:{props.tags.join(", ")}{" "}
        {/* {props.isNew ? "--Baru" : "--Lama"} */}
        {/* {props.isNew && "--Baru!!"} */}
        {/* <ArticleStatus isNew={props.isNew} /> */}
        {props.isNew && <NewArticle />}
      </small>
      <div>
        <small>Created by {user.username} </small>
      </div>
    </>
  );
}

export default Articles;
