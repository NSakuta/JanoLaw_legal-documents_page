import { useState } from "react";
import { Collapse } from "react-bootstrap";
import Article from "../../Article";
import Button from "../../Button";
import ButtonTextEdit from "../../ButtonTextEdit";
import Modal from "../../Modal";
import TextArea from "../../TextArea";

const TextEditor = (props) => {

    const {text, onClick, id} = props

    const [isOpen, setIsOpen] = useState(true);

    const hideOrShowBlock = () => {
        setIsOpen(prevState => !prevState)
    }

    /////Modal window

    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true) 
    const closeModal = () => setShowModal(false)

    ////Text

    const txt = "There are many variations of passages of Lorem Ipsum available but the majority have suffered. humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a combined with a handful of model Lorem Ipsum available dictionary of over 200 Latin words, sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."

    return (
        <>
            <Article className="h-fitContent" style={{gridTemplateColumns: "none"}}> 
            <div class="d-flex justify-content-between">
               <div>
                   <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                     <Button className="bgGreen text-white"
                            text={text}
                            svg={<i className="fas fa-file-alt fa-sm"></i>}>
                     </Button>
                     <Button className="bgGreen text-white"
                            onClick={onClick}
                            id={id}
                            style={{borderLeft: "solid 1px #ffffff"}}
                            svg={<i className="fas fa-times fa-sm"></i>}>
                     </Button>
                   </div>
               </div>
               <div>
                    <Button className="btn-sm border ms-3 text-dark"
                          title={isOpen ? "Hide Block" : "Show Block"}
                          onClick={hideOrShowBlock}
                          aria-controls="collapse-text"
                          aria-expanded={isOpen}
                          text={isOpen ? "Hide Block" : "Show Block"}
                          data-bs-toggle="tooltip" 
                          data-bs-placement="right" 
                          style={{backgroundColor: "rgba(31,116,106,0.1)"}}
                          svg={isOpen ? <i class="fas fa-chevron-up fa-sm"></i> : <i class="rotate fas fa-chevron-up fa-sm"></i>}>                           
                  </Button> 
                </div>
           </div>
           <Collapse in={isOpen}>
               <div id="collapse-text">
                    <div className="d-flex justify-content-between p-3 text-dark mb-0" style={{backgroundColor: "#F3F3F3", borderRadius: "7px 7px 0px 0px"}}>
                        <div>
                            <ul className="nav nav-pills nav-flush flex-row mb-auto text-center">
                                <li className="nav-item">
                                    <ButtonTextEdit title="Bold">
                                        <i className="fas fa-bold"></i>
                                    </ButtonTextEdit>
                                </li>
                                <li class="nav-item">
                                    <ButtonTextEdit title="Italic">
                                        <i className="fas fa-italic"></i>
                                    </ButtonTextEdit>
                                </li>
                                <li class="nav-item">
                                    <ButtonTextEdit title="Underline">
                                        <i className="fas fa-underline"></i>
                                    </ButtonTextEdit>
                                </li>
                                
                                <li class="nav-item border-end">
                                    &nbsp;
                                </li>
                                <li class="nav-item">
                                    <ButtonTextEdit title="align-left"
                                                    className="nav-link text-dark">
                                        <i className="fas fa-align-left"></i>
                                    </ButtonTextEdit>
                                </li>
                                <li class="nav-item">
                                    <ButtonTextEdit title="align-center"
                                                    className="nav-link text-dark">
                                        <i className="fas fa-align-center"></i>
                                    </ButtonTextEdit>
                                </li>
                                <li class="nav-item">
                                    <ButtonTextEdit title="list"
                                                    className="nav-link text-dark">
                                        <i className="fas fa-list-ol"></i>
                                    </ButtonTextEdit>
                                </li>
                            </ul>
                        </div>
                    <div>
                        <Button className="btn-sm btn-outline-primary px-5"
                                style={{border: "solid 2px #3820C8", backgroundColor: "#ffffff", color: "#3820C8"}}
                                text="Preview"
                                onClick={openModal}
                                svg={<i className="far fa-eye"></i>}>
                        </Button>
                        <Button className="btn-sm btn-primary px-5 marg-l-5"
                                style={{border: "solid 2px #4063DF", backgroundColor: "#4063DF"}}
                                text="Add variable"
                                svg={<i className="fas fa-plus"></i>}>
                        </Button>
                    </div>
                </div>         
                <TextArea text={txt}></TextArea>
           </div>
           </Collapse>
        </Article>  
        <Modal show={showModal} onHide={closeModal} text={txt}></Modal>   
      </>          
    )
}

export default TextEditor;