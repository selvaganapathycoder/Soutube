import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../services/youtubeApi";
import ShortsCard from "../components/ShortsCard";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";

const Shorts = () => {
  const [shorts, setShorts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // "shorts" query is a good proxy.
    // We can also filter by videoDuration='short' but that includes all short videos,
    // not necessarily vertical "Shorts". But 'q=shorts' is decent.
    fetchFromAPI(`search`, {
      part: "snippet,id",
      q: "shorts",
      type: "video",
      videoDuration: "short",
      maxResults: 10,
    }).then((data) => {
      setShorts(data.items);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <Container
      fluid
      style={{
        height: "92vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        backgroundColor: "#000",
        padding: 0,
      }}
    >
      {shorts.map(
        (item) =>
          item.id.videoId && (
            <ShortsCard key={item.id.videoId} videoId={item.id.videoId} />
          )
      )}
    </Container>
  );
};

export default Shorts;
