import { connect } from "react-redux";
import Header from "./Header";
import translate from "../../language/translate";

const mapStateToProps = state => {
    return {
        text: translate(state.language, "game"),
    };
};

export default connect(mapStateToProps)(Header);