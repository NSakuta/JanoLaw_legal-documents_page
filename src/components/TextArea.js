const TextArea = (props) => {

    const {text} = props

    return (
        <div class="p-5 mt-0" style={{border: "1px solid #F3F3F3", marginTop: "-17px !important", borderRadius: "0px 0px 7px 7px", lineHeight: "26px !important", fontSize: "16px !important"}}>
            <span>{text}</span>     
        </div>
    )
}

export default TextArea;