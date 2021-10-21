import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }

  render() {
    if (this.state.hasError) {
      return <div>An Error occured</div>;
    }
    return this.props.children;
  }
}
