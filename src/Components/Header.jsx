import React from "react";

const HEADER_IMAGE_URL =
  "https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png";
const SEARCH_ICON_IMAGE =
  "https://assets.ccbp.in/frontend/react-js/search-img.png";

const Header = ({ searchInput, setSearchInput }) => {
  return (
    <div className="header-comp">
      <img
        className="header-comp-heading"
        src={`${HEADER_IMAGE_URL}`}
        alt="Header Icon"
      />
      <div className="header-comp-search">
        <div className="header-comp-searchIcon">
          <img
            className="header-comp-searchIcon-img"
            src={`${SEARCH_ICON_IMAGE}`}
            alt="Search Icon"
          />
        </div>
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="header-comp-input"
          type="text"
          placeholder="Search history"
        />
      </div>
    </div>
  );
};

export default Header;
