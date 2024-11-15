import React from 'react';

const Sort = ({ setSortBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sort">
      <label>Sort By:</label>
      <select onChange={handleSortChange}>
        <option value="price">Price (Low to High)</option>
        <option value="-price">Price (High to Low)</option>
      </select>
    </div>
  );
};

export default Sort;
