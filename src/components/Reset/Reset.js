const Reset = ({ text, handleClick }) => (
    <button 
        className="btn btn-danger"
        onClick={ handleClick }
    >{ text }</button>
);

export default Reset;