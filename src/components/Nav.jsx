import React, { useState } from "react";
import SearchResult from "./SearchResult";
import getMovies from "../services/TMDB";
import { Alert, Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

function Nav() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notification, setNotification] = useState({});

  const handleSearchInput = async () => {
    try {
      if (searchValue.length > 2) {
        const results = await getMovies(searchValue);
        if (results.length > 0) {
          setSearchResults(results);
        } else {
          setNotification({
            message: "No movies found matching your search.",
            type: "warning",
          });
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      setNotification({
        message: "An error occurred while searching for movies.",
        type: "error",
      });
      console.log(error);
      setSearchResults([]);
    }
  };

  return (
    <header className="header">
      {notification.message && (
        <Alert
          showIcon
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            zIndex: 1000,
          }}
          message={notification.message}
          closable
          type={notification.type}
          onClose={() => setNotification({})}
        />
      )}
      <img src="/src/assets/netflix.png" alt="logo" id="netflix-logo" />
      <div className="input-container">
        <input
          type="text"
          id="searchInput"
          placeholder="Search movies..."
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
          onKeyUp={e => handleSearchInput()}
        />
        {searchResults.length && <SearchResult data={searchResults} />}
      </div>
      <Button
        className="watchLists-Btn"
        icon={<ClockCircleOutlined />}
        size="large"
      >
        Watch List
      </Button>
    </header>
  );
}

export default Nav;
