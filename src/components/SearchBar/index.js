import { useState } from "react";

export function SearchBar({ profile }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    if (searchInput !== "") {
      setSearchInput(searchValue);
      profile.filter((item) => {
        return item.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredResults(searchInput);
    } else {
      setFilteredResults(profile);
    }
  };

  return (
    <form>
      <label htmlFor="input-search">Search:</label>
      <input
        name="search"
        type="text"
        onChange={() => searchItems()}
        placeholder="search"
      />
    </form>
  );
}
