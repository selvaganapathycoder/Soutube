import React, { useState } from "react";
import { Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Stack
      direction="horizontal"
      align="center"
      className="p-2 sticky-top"
      style={{
        justifyContent: "space-between",
        background: "#000",
        top: 0,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="logo" height={45} />
      </Link>

      <form
        onSubmit={onhandleSubmit}
        style={{
          background: "white",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          padding: "2px 10px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            padding: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "transparent",
            border: "none",
            color: "red",
          }}
        >
          <IoSearch size={20} />
        </button>
      </form>
    </Stack>
  );
};

export default Navbar;
