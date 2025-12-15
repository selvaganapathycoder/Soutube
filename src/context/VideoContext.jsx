import React, { createContext, useState, useEffect } from "react";
import { fetchFromAPI } from "../services/youtubeApi";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // If category is "New", we might want to just search "New" or a general trending query.
    // YouTube API doesn't have a simple "feed" endpoint without OAuth for *user's* feed,
    // but search with 'q' works well for categories.

    const query = selectedCategory === "New" ? "trending" : selectedCategory;

    fetchFromAPI(`search`, { part: "snippet,id", q: query })
      .then((data) => {
        setVideos(data.items);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos,
        loading,
        setLoading,
        error,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
