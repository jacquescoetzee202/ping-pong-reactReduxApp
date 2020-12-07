const Button = ({ handleClick, won }) => {
    return(
        <button 
        className="form-control btn btn-success"
        onClick={ handleClick }
        disabled={ won }
        >+</button>
    );
}

export default Button;