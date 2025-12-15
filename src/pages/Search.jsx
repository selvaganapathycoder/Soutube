import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { fetchFromAPI } from "../services/youtubeApi";
import VideoList from "../components/VideoList";
import Loader from "../components/Loader";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search`, { part: "snippet,id", q: searchTerm }).then(
      (data) => {
        setVideos(data.items);
        setLoading(false);
      }
    );
  }, [searchTerm]);

  return (
    <Container
      fluid
      style={{ minHeight: "92vh", backgroundColor: "#000", padding: "20px" }}
    >
      <h4 style={{ color: "white", fontWeight: "bold", marginBottom: "20px" }}>
        Search Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </h4>
      {loading ? <Loader /> : <VideoList videos={videos} />}
    </Container>
  );
};

export default Search;
