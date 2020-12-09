import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
    return {
        display: state.inProgress,
    };
};

export default connect(mapStateToProps)(App);