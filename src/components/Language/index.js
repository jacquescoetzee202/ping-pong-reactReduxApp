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

const mapDispatchToProps = dispatch => {
    return {
        lang1Select: () => dispatch({ type: "LANGUAGE_1"}),
        lang2Select: () => dispatch({ type: "LANGUAGE_2"}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Language);