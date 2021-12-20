import Button from "../../Button";

const FileName = (props) => {

    const {onChangeValue} = props;

    console.log('onchnagevalue', onChangeValue)

    return (
        <>
            <div className="d-flex justify-content-start">
                    <div className=" m-0 p-1">
                        <svg width="26" height="32" viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.667 1V11H24.667" stroke="#3A73A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M14.6663 1L24.6663 11V31H1.33301V1H14.6663Z" stroke="#3A73A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className="p-0 m-0">
                        <h5 className="p-0 m-0" style={{fontSize: "14px", color: "#A89F9F"}}>Editor</h5>
                        <input onChange={onChangeValue} id="border-no" class="p-0 m-0" style={{fontSize: "16px", color: "#000000"}} placeholder="Enter File Name"/>
                    </div>
            </div>
            <div>
                <div class="btn-group btn-group-sm buttonsLang">
                <Button className="btn btn-primary active"
                        aria-current="page"
                        text="ENG"></Button>
                <Button className="btn btn-outline-dark"
                        text="LV">
                            <i class="fas fa-chevron-down fa-sm"></i>
                </Button>
                </div>
            </div>
        </>
    )
}

export default FileName;