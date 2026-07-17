import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return <div className="flex">
    <Button startIcon={<PlusIcon size="lg"/>} size="lg" variant="primary" text="Add content"></Button>
    <Button startIcon={<ShareIcon size="lg"/>} size="md" variant="secondary" text="Share"></Button>
    </div>
}

export default App
