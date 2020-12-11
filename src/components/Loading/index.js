import { connect } from "react-redux";
import Loading from "./Loading";
import { getGameHistory } from "../../data/actions/api";

const mapStateTopProps = ({ loaded }) => ({
    loaded: loaded,
});

const mapDispatchToProps = ( dispatch ) => ({
    handleLoad: () => dispatch(getGameHistory()),
});

export default connect(mapStateTopProps,mapDispatchToProps)(Loading);