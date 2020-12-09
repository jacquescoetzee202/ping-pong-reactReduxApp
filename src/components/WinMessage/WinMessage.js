
const WinMessage = ({ winner, text1, text2 }) => (
    <h2 className={`alert alert-success ${ winner > 0 ? "" : "d-none" }`}
    >
        {`${text1} ${winner} ${text2}!`}
    </h2>
);

export default WinMessage;