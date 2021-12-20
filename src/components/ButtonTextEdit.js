const ButtonTextEdit = (props) => {

    const {title, ...rest} = props;

    return (
        <button className="nav-link text-dark" 
                aria-current="page" 
                title={title} 
                data-bs-toggle="tooltip" 
                data-bs-placement="right" {...rest}>     
        </button>
    )
}

export default ButtonTextEdit;