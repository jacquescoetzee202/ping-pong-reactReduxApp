import { connect } from "react-redux";
import ResultsTable from "./ResultsTable";

const mapStateToProps = state => {
    return {
        results: state.gameHistory,
    };
};

export default connect(mapStateToProps)(ResultsTable);