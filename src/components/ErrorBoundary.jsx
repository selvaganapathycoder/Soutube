import React from "react";
import { Container, Alert } from "react-bootstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: "100vh", color: "white" }}
        >
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>{this.state.error && this.state.error.toString()}</p>
            <hr />
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </Alert>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
