import { Button } from "antd";
import React from "react";
import { PlusSquareOutlined } from "@ant-design/icons";

function SearchResult({ data }) {
  const results = data.map(movie => {
    const name = movie.title || movie.name;
    const shortenedTitle =
      name.length > 30 ? `${name.substring(0, 27)}...` : name;
    const date = movie.release_date || movie.first_air_date;
    const buttonText = movie.in_watchlist
      ? "Remove from Watchlist"
      : "Add to Watchlist";
    return (
      <div key={movie.id} className="movie-list">
        <div className="search-item-thumbnail">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </div>
        <div className="search-item-info">
          <h3>{shortenedTitle}</h3>
          <p>
            {movie.media_type} <span> &nbsp; {date}</span>
          </p>
        </div>
        <Button icon={<PlusSquareOutlined />}>{buttonText}</Button>
      </div>
    );
  });

  return <div className="searchResults">{results}</div>;
}

export default SearchResult;
