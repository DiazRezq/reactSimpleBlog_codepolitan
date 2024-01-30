function Articles(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date:{props.date}, tags:{props.tags.join(", ")}
      </small>
    </>
  );
}

export default Articles;
