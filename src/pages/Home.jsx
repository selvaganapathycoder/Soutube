import React, { useContext } from "react";
import { Stack, Container, Row, Col } from "react-bootstrap";
import { VideoContext } from "../context/VideoContext";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/VideoList";
import Loader from "../components/Loader";

const Home = () => {
  const { selectedCategory, videos, loading, error } = useContext(VideoContext);

  if (error) {
    return (
      <h2 className="text-center text-danger mt-5">
        Error: {error}. Check implementation_plan.md for help.
      </h2>
    );
  }

  return (
    <Stack direction="horizontal" gap={0} className="align-items-start">
      <Sidebar />
      <Container
        fluid
        style={{ height: "92vh", overflowY: "auto", backgroundColor: "#000" }}
      >
        <h4 style={{ color: "white", fontWeight: "bold", margin: "20px 0" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </h4>

        {loading ? <Loader /> : <VideoList videos={videos} />}
      </Container>
    </Stack>
  );
};

export default Home;
