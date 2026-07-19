import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/SharIcon"

function App() {
  return <div>
    <div className="flex justify-end">
      <div className= "p-3">
        <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>
      </div>
      <div className= "p-3">
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>
      </div>
    </div>
    

    <Card title = "youtube video" link="https://www.youtube.com/watch?v=ZqGSg4b_cZA&t=1s" type="youtube">
    </Card>

    <Card title = "twitter " link="https://x.com/AlphaLabx/status/2078813938503069799?s=20" type="twitter">
    </Card>
  </div>
}

export default App
