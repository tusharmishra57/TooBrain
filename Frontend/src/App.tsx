import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/SharIcon"

function App() {
  return <div>
    <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button>
    <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>

    <Card>

    </Card>

  </div>
}

export default App
