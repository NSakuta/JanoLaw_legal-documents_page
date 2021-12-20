import Article from "../../Article"
import Button from "../../Button";
import Input from "../../Input";
import { useState } from "react";

const Inputs = (props) => {

    const {onChange} = props

    const [inputList, setInputList] = useState([])

    const onAddBtnClick = e => {
        setInputList(inputList.concat(
            <Input key={`index-${inputList.length}`} 
                label={`Party ${inputList.length + 2}`}
                onChange={onChange} 
                id="colFormLabel" 
                placeholder="Enter Info" 
                name={`party-${inputList.length + 2}`} 
                className="form-control" 
                margLeft="col-sm-1 pt-1"
                column="col-sm-3">      
            </Input>
        ))
    }

    return (
        <Article style={{gridTemplateColumns: "none"}}>
                <Input label="Title" 
                        id="colFormLabel" 
                        placeholder="Enter title" 
                        name="title" 
                        className="form-control" 
                        onChange={onChange}
                        column="col-sm-6">
                </Input>
                <Input label="Description" 
                        id="colFormLabel" 
                        placeholder="Enter Description" 
                        name="description" 
                        className="form-control"
                        onChange={onChange} 
                        column="col-sm-6">      
                </Input>
                <Input label="Header" 
                        id="colFormLabel" 
                        placeholder="Enter Header" 
                        name="header" 
                        className="form-control" 
                        onChange={onChange}
                        column="col-sm-6">       
                </Input>
                <Button className="col-sm-1 pt-1 rounded-circle ms-3" 
                        style={{display: "inline"}}
                        onClick={onAddBtnClick}
                        id="plus-btn"
                        text="+">
                </Button>  
                <Input key="index-1" 
                        onChange={onChange}
                        label="Party 1"
                        marginLeft="ml-5"
                        id="colFormLabel" 
                        placeholder="Enter Info" 
                        name="party-1"
                        className="form-control" 
                        margLeft="col-sm-1 pt-1"
                        column="col-sm-3">
                </Input>
                {inputList}
        </Article>
    )
}

export default Inputs;

