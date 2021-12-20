import { useState } from "react";
import BlockText from "./Blocks/Text";
import BlockDefinitions from "./Blocks/Definitions";
import BlockTools from "./Blocks/Tools";
import Button from "../Button";


const SideBar = (props) => {

    const {onClick, isOpen} = props
    const [currentButton, setCurrentButton] = useState("sideTab1")
    
    console.log('isOpen: ', isOpen)
    return (
        <>
        {isOpen ? <aside className="menu active bd-aside sticky-xl-top shadow mb-3 mb-xl-5 px-3 pt-5 z-ind-1">
        <div class="d-flex justify-content-between">
          <div>
              <Button onClick={onClick}
                    className="nav-link rounded-circle ms-3 buttonHeader"
                    aria-current="page" 
                    title="Home" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right"
                    svg={<i class="fas fa-sign-out-alt fa-lg"></i>}>
              </Button>
          </div>
          <div>Blocks</div>
          <div>
              <Button className="nav-link rounded-circle ms-3 buttonHeader" 
                    aria-current="page" 
                    title="Home" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right"
                    svg={<i class="fas fa-search fa-lg"></i>}>
              </Button>
            </div>
        </div>

        <div class="btn-group d-flex" role="group" aria-label="Basic mixed styles example">
          <Button className={currentButton === "sideTab1" ? "active sideTabs btn-border" : "sideTabs btn-border"} 
                  onClick={() => setCurrentButton("sideTab1")}
                  text="TEXT">
          </Button>
          <Button className={currentButton === "sideTab2" ? "active sideTabs btn-border" : "sideTabs btn-border"} 
                  onClick={() => setCurrentButton("sideTab2")}
                  text="DEFINITIONS">
          </Button>
          <Button className={currentButton === "sideTab3" ? "active sideTabs btn-border" : "sideTabs btn-border"}
                  onClick={() => setCurrentButton("sideTab3")}
                  text="TOOLS">
          </Button>
        </div>

        {
          ({
            sideTab1: <BlockText></BlockText>,
            sideTab2: <BlockDefinitions></BlockDefinitions>,
            sideTab3: <BlockTools></BlockTools>
          })[currentButton]
        }
      </aside>
      :
       <aside className="menu closed bd-aside sticky-xl-top mb-3 mb-xl-5 px-3 pt-5">
       <div class="d-flex justify-content-between">
           <div>
              <Button onClick={onClick} 
                    className="nav-link rounded-circle ms-3 buttonHeader"
                    aria-current="page" 
                    title="Home" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="right"
                    svg={<i className="fas rotate fa-sign-out-alt fa-lg"></i>}>
              </Button>
          </div>
          </div>
        </aside>
        }  
      </> 
    )
}

export default SideBar;