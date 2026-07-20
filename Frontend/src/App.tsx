import { AddContentModal } from "./components/AddContentModal"
import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { SideBar } from "./components/SideBar"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/SharIcon"
import {useState} from "react"


function App() {
  const [modal, setModal] = useState(false);

  return <div>
    <div className="border-r bg-white h-screen w-72 fixed">
      <SideBar/>
    </div>
    
    <div className="bg-gray-100 h-screen">
        <AddContentModal open = {modal} onClose={()=>{
        setModal(false);
        }}></AddContentModal>


        <div className="flex justify-end">
          <div className= "p-3">
            <Button variant="primary" text="Add content" startIcon={<PlusIcon/>} onClick={() => {setModal(true)}}></Button>
          </div>
          <div className= "p-3">
            <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
          </div>
        </div>
        
        <div className="ml-72 flex">
          <Card title = "youtube video" link="https://www.youtube.com/watch?v=ZqGSg4b_cZA&t=1s" type="youtube">
          </Card>

          <Card title = "twitter " link="https://x.com/AlphaLabx/status/2078813938503069799?s=20" type="twitter">
          </Card>
        </div>
      
      </div>
    </div>
    
}

export default App
