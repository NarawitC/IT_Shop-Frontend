import { SearchIcon } from '../../../icon/icon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const handleSearchTextButton = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchButton = (e) => {
    e.preventDefault();
    navigate(`/product/searchText/${searchText}`);
  };
  return (
    <div
      className="bg-light1 px-3 d-flex justify-content-between"
      style={{ width: '40vw', height: '30px' }}
    >
      <input
        onKeyUp={handleSearchTextButton}
        className=" no-border form-control p-0 m-0 "
        placeholder="Search for items"
      />
      <button
        onClick={handleSearchButton}
        className=" p-0 m-0 my-auto btn-gray-i"
      >
        <SearchIcon></SearchIcon>
      </button>
    </div>
  );
}

export default SearchBar;
