import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({
  placeholder,
  type = "text",
  handleFilter,
  filteredData,
  handleClick,
}) => {
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
            <li key={key} onClick={()=> handleClick(skill.id,skill.name)}>
              {skill.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
