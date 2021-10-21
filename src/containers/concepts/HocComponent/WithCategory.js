import { Component } from "react";

export function WithCategory(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { title: "Title from HOC" };
    }
    render() {
      return (
        <div>
          <div>Category HOC Class</div>
          <WrappedComponent {...this.props} {...this.state} />
        </div>
      );
    }
  };
}
