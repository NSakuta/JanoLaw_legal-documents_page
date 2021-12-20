import Button from "../../Button";
import Article from "../../Article";
import { useState } from "react";
import React from "react";
import TextEditor from "./TextEditor";

const AddBlock = (props) => {

    const {onClick} = props;

    const removePreambula = (e) => {
        e.preventDefault();
        const id = +e.currentTarget.id;
        console.log('id', id)
        setPreambulaList(state => state.filter(el => el.key !== id));
        
    }
    
    const [preambulaList, setPreambulaList] = useState([
        {
            key: 0, 
            content: <TextEditor key={`${0}`} 
                                    id={0} 
                                    text={`Preambula ${1}`}
                                    onClick={removePreambula}>
                    </TextEditor>
        }
    ])

    const onAddBlockClick = () => {
        
        if(preambulaList.length === 0) {
            setPreambulaList([...preambulaList, 
                {
                    key: 0, content: <TextEditor key={`${0}`} 
                                                id={0} 
                                                text={`Preambula ${1}`}
                                                onClick={removePreambula}>
                                                </TextEditor>
                }
            ])
        } else {
            const newEl = <TextEditor key={preambulaList[preambulaList.length - 1].key + 1} 
                                    id={preambulaList[preambulaList.length - 1].key + 1}
                                    text={`Preambula ${preambulaList[preambulaList.length - 1].key + 2}`} 
                                    onClick={removePreambula}>
                        </TextEditor>

        setPreambulaList(prev => prev.concat({key: preambulaList[preambulaList.length - 1].key + 1, content: newEl}))
        }    
    }

    return (
        <>
        <Article className="h-fitContent d-flex justify-content-between" style={{gridTemplateColumns: "none"}}>
                <h1 class="p-0 m-0" style={{fontSize: "24px", fontWeight: 700}}>Agreements Blocks</h1>
                <div class="p-0 m-0">
                    <ul class="nav nav-pills nav-fslush flexs-row mbww-auto text-center">
                        <li class="nav-item">
                            <Button className="nav-link border rounded-circle ms-3 buttonHeader" 
                                    title="Dashboard" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="right"
                                    svg={<i className="fas fa-search fa-sm"></i>}>                                                   
                            </Button>
                        </li>
                        <li>
                        <Button className="nav-link border rounded-circle ms-3 buttonHeader" 
                                    title="Orders" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="right"
                                    svg={<i className="fas fa-question fa-sm"></i>}>                                                   
                            </Button>
                        </li>

                        <li>
                            <Button className="btn btn-outlie-dark border ms-3 colorBlue2 borderBlue2" 
                                    text="Save" 
                                    onClick={onClick}
                                    title="Products" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="right">   
                            </Button>
                        </li>
                        <li>
                            <Button className="btn btn-info border ms-3 text-light bgBlue2" 
                                    onClick={onAddBlockClick}
                                    text="+ Add block" 
                                    title="Products" 
                                    data-bs-toggle="tooltip" 
                                    data-bs-placement="right">
                            </Button>              
                        </li>
                    </ul>
                </div>
        </Article>
        {preambulaList.map(el => {
            return (
                el.content
            )
        })}
        </>
    )
}
 

export default AddBlock;