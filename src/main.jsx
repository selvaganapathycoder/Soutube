import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/VideoContext";

import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
