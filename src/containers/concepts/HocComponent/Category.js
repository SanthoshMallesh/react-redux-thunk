import { Component } from "react";
import { WithCategory } from "./WithCategory";

class Category extends Component {
  render() {
    return (
      <div>
        {this.props.title} : Categories Components name - {this.props.name}
      </div>
    );
  }
}

export default WithCategory(Category);
