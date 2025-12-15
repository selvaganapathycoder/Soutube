import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap"; // Using bootstrap container
import VideoList from "../components/VideoList";
import ChannelCard from "../components/ChannelCard";
import { fetchFromAPI } from "../services/youtubeApi";
import Loader from "../components/Loader";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels`, {
        part: "snippet,statistics",
        id: id,
      });

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search`, {
        channelId: id,
        part: "snippet,id",
        order: "date",
      });

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  if (!channelDetail?.snippet) return <Loader />;

  return (
    <div style={{ minHeight: "95vh", backgroundColor: "#000" }}>
      <div
        style={{
          height: "300px",
          background:
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <Container>
        <div style={{ display: "flex", p: 2 }}>
          <div style={{ marginRight: "10px" }} /> {/* Spacer if needed */}
          <VideoList videos={videos} />
        </div>
      </Container>
    </div>
  );
};

export default ChannelDetail;
