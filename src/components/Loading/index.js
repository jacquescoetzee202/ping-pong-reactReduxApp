import { connect } from "react-redux";
import Loading from "./Loading";
import { postGame } from "../../data/actions/api";

const mapStateTopProps = ({ loaded }) => ({
    loaded: loaded,
});

const mapDispatchToProps = ( dispatch ) => ({
    handleLoad: () => dispatch(postGame()),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Loading);