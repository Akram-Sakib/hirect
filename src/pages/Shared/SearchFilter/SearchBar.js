import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder, type = "text", data }) => {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.filter((value) => {
    //   return value.toLowerCase().includes(searchWord.toLowerCase());
      return value.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
    });

    if (searchWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="form-group has-search mt-2 mb-4 position-relative">
      <span className="fa fa-search form-control-feedback "></span>
      <input
        type={type}
        className="form-control input"
        placeholder={placeholder}
        onChange={handleFilter}
      />
      {filteredData.length != 0 && (
        <ul className="dataList">
          {filteredData.slice(0, 4).map((skill, key) => (
            <li key={key}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
