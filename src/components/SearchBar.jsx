import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropAll from "../components/Properties";
import { FaSearch } from "react-icons/fa";
import "../css/SearchBar.css";

export function SearchBar({ inputName, setInputName }) {
  return (
    <div className="centered-container">
      <div className="form-container">
        <form className="search-form">
          <input
            className="form-input"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
            placeholder="Search for club by name"
          ></input>
          <FaSearch className="icons" />
        </form>
      </div>
    </div>
  );
}
