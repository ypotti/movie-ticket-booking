import React, { useEffect, useState } from "react";

const Filter = ({ item, filters, setFilters }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(item.apiMethod());
  }, [item]);

  const onOptionChange = (e) => {
    const value = e.target.value;

    if (item.id === "Location") {
      setFilters({ ...filters, location: value });
    } else if (item.id === "Language") {
      setFilters({ ...filters, language: value });
    } else if (item.id === "Genre") {
      setFilters({ ...filters, genre: value });
    }
  };

  return (
    <div className="Filters me-2">
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
