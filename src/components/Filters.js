import React, { useEffect, useState } from "react";

const Filter = ({ item, filters, setFilters }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(item.apiMethod());
  }, [item]);

  const onOptionChange = (e) => {
    if (item.id === "Language") {
      setFilters({ ...filters, language: e.target.value });
    } else if (item.id === "Location") {
      setFilters({ ...filters, location: e.target.value });
    } else if (item.id === "Genre") {
      setFilters({ ...filters, genre: e.target.value });
    }
  };

  return (
    <div className="Filters">
      <label className="Movies__filterLabel">{item.label}</label>
      <div className="Movies_filter_box">
        {item.icon}
        <select className="Movies__Select" onChange={onOptionChange}>
          <option value="all">--All--</option>
          {options.map((item) => (
            <option value={item.name} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
