const Button = ({ handleClick }) => {
    return(
        <button 
        className="form-control btn btn-success"
        onClick={ handleClick }
        >+</button>
    );
}

export default Button;