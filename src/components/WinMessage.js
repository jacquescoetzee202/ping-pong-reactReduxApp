const WinMessage = ({ playerText, winsText, winner }) => (
    <h2 className={`alert alert-success ${ winner > 0 ? "" : "d-none" }`}
    >
        { playerText } { winner } { winsText }!
    </h2>
);

export default WinMessage;