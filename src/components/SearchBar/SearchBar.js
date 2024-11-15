import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search products..." onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
