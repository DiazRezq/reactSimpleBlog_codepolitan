const ArticleStatus = ({ isNew }) => {
  return isNew && <span>--Baru</span>;
};

const NewArticle = () => {
  return <span>--Baru</span>;
};
function Articles(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date:{props.date}, tags:{props.tags.join(", ")}{" "}
        {/* {props.isNew ? "--Baru" : "--Lama"} */}
        {/* {props.isNew && "--Baru!!"} */}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}

export default Articles;
