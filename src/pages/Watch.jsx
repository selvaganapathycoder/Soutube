import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai";
import { fetchFromAPI } from "../services/youtubeApi";
import VideoList from "../components/VideoList";
import Loader from "../components/Loader";

const Watch = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (!id) return;

    // Fetch video details
    fetchFromAPI(`videos`, {
      part: "contentDetails,snippet,statistics",
      id: id,
    }).then((data) => {
      if (data.items && data.items.length > 0) {
        setVideoDetail(data.items[0]);
      }
    });

    // Fetch related videos
    fetchFromAPI(`search`, {
      part: "snippet",
      relatedToVideoId: id,
      type: "video",
    }).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Container fluid style={{ minHeight: "95vh", backgroundColor: "#000" }}>
      <Row>
        <Col md={9} xs={12}>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            {/* 16:9 Aspect Ratio */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <div style={{ color: "#fff", marginTop: "10px" }}>
            <h5>{title}</h5>
            <Stack
              direction="horizontal"
              gap={3}
              style={{ justifyContent: "space-between" }}
            >
              <Link
                to={`/channel/${channelId}`}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Stack direction="horizontal" gap={1}>
                  <h6 style={{ margin: 0, fontWeight: "bold" }}>
                    {channelTitle}
                  </h6>
                  <AiFillCheckCircle size={12} color="gray" />
                </Stack>
              </Link>
              <Stack direction="horizontal" gap={3} style={{ opacity: 0.7 }}>
                <span>{parseInt(viewCount).toLocaleString()} views</span>
                <span>{parseInt(likeCount).toLocaleString()} likes</span>
              </Stack>
            </Stack>
          </div>
        </Col>
        <Col md={3} xs={12} className="mt-3 mt-md-0">
          {videos && <VideoList videos={videos} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Watch;
