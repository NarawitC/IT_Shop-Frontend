import { SearchIcon } from '../../../icon/icon';
function SearchBar() {
  return (
    <div
      className="bg-light1 px-3 d-flex justify-content-between"
      style={{ width: '40vw', height: '30px' }}
    >
      <input
        className=" no-border form-control p-0 m-0 "
        placeholder="Search for items"
      />
      <button className=" p-0 m-0 btn-gray-i">
        <SearchIcon></SearchIcon>
      </button>
    </div>
  );
}

export default SearchBar;
