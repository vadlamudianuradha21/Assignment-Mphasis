import React from 'react';

const Filter = ({ setCategoryFilter }) => {
  const handleFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <div className="filter">
      <label>Category:</label>
      <select onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default Filter;
