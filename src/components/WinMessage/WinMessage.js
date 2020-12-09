
const WinMessage = ({ text, winner }) => (
    <h2 className={`alert alert-success ${ winner > 0 ? "" : "d-none" }`}
    >
        { text }!
    </h2>
);

export default WinMessage;