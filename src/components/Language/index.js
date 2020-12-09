import { connect } from "react-redux";
import Language from "./Language";
import translate from "../../language/translate";

const mapStateToProps = (state, { lang1Select, lang2Select }) => {
    return {
        text: translate(state.language, "language"),
        lang1Select,
        lang2Select,
    };
};

export default connect(mapStateToProps)(Language);