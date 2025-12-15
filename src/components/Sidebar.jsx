import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLiveTv } from "react-icons/md";
import { categories } from "../utils/constants";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";

const Sidebar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <Stack
      direction="vertical"
      gap={2}
      style={{
        overflowY: "auto",
        height: "92vh",
        borderRight: "1px solid #3d3d3d",
        paddingRight: "10px",
      }}
      className="d-none d-md-flex col-md-2"
    >
      <Link to="/shorts" style={{ textDecoration: "none" }}>
        <button
          className="category-btn"
          style={{
            background: "transparent",
            color: "white",
            borderRadius: "20px",
            padding: "7px 15px",
            margin: "5px 0",
            width: "100%",
          }}
        >
          <span style={{ color: "red", marginRight: "15px" }}>
            <MdLiveTv />
          </span>
          <span>Shorts</span>
        </button>
      </Link>
      <hr style={{ color: "#3d3d3d" }} />
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
            borderRadius: "20px",
            padding: "7px 15px",
            margin: "5px 0",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            <category.icon />
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
