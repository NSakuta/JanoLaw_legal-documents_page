import FileName from "./Blocks/FileName";
import Title from "./Blocks/Title";
import Inputs from "./Blocks/Inputs";
import AddBlock from "./Blocks/AddBlock";
import SideBar from "./SideBar";
import { useState } from "react";


const LegalDocuments = () => {

    const [isOpen, setIsOpen] = useState(true);

    const [value, setValue] = useState({
        fileName: '',
        title: '',
        description: '',
        header: ''
    });

    const onChangeValueHandler = (e) => {
      setValue({...value, [e.target.name]: e.target.value})
    }

    const hideSideBar = () => {
      setIsOpen(
        prevState => !prevState
      )
    }

    const submitValue = () => {
      console.log('value: ', value)
    }

    console.log('value: ', value)

    return (
    <div className="container-legal-doc">
      <> <SideBar onClick={hideSideBar} isOpen={isOpen}></SideBar>
      </>
        <div className="bd-cheatsheet container-fluid bg-body" style={{gridColumn: "1 / span 3"}}>
          <section id="contentw">
              <article className="stickys-xl-top pt-3 pt-xl-5 pb-2 pb-xl-3 mx-5 px-3 d-flex justify-content-between">
                <FileName onChangeValue={(e) => onChangeValueHandler(e)}></FileName>
              </article>
            <Title></Title>
            <Inputs onChange={(e) => onChangeValueHandler(e)}></Inputs>
            <AddBlock onClick={submitValue}></AddBlock>
            <article className="mb-5"></article>
          </section> 
        </div>  
      </div> 

  )
}

export default LegalDocuments;

