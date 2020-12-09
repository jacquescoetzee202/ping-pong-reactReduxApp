import { connect } from "react-redux";
import Settings from "./Settings";

const mapStateToProps = state => {
    return {
        display: !state.inProgress,
    };
};

export default connect(mapStateToProps)(Settings);