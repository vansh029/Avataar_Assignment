import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} style={searchBarStyle}>
      <input
        type="text"
        placeholder="Search Something"
        value={searchTerm}
        onChange={handleChange}
        style={inputStyle}
      />
    </form>
  );
};

const searchBarStyle = {
  display: 'flex',
  alignItems: 'center',
};

const inputStyle = {
  border: 'none',
  borderBottom: '1px solid white',
  background: 'transparent',
  color: 'white',
  padding: '8px',
  outline: 'none',
  width: '100%', 


  '@media (min-width: 600px)': {
    width: '200px', 
  },
};

export default SearchBar;
