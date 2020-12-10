import { Component } from "react";

class Loading extends Component {
  render() {
    const { children, loaded } = this.props;

    return loaded ? children : (
        <div className="container">
            <h3>Loading.....</h3>
            <div className="progress">
                <div
                className="progress-bar progress-bar-striped active"
                style={{ width: "100%" }}
                />
            </div>
        </div>
    );
  }
}

export default Loading;