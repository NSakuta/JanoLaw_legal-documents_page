const Button = (props) => {

    const { className, text, svg, id, ...rest} = props

    return (
        <button id={id} type="button" className={className + " btn"}{...rest}>{svg} {text}</button>
    )
}

export default Button;