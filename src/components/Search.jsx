import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        cari artikel : <input type="text" onChange={onSearchChange} />
      </div>
      <small>
        Ditemukan {props.totalPosts} data dari kata {search}
      </small>
    </>
  );
}

export default Search;
