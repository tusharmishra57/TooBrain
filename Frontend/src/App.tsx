import Dashboard from "./pages/dashboard"
import { Signin  } from "./pages/signin"
import { Signup  } from "./pages/signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
return <div>
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
</div>
    
}

export default App
