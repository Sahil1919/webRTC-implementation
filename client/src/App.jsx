
import { Routes, Route } from "react-router-dom"
import LobbyScreen from "./screens/LobbyScreen"
function App() {


  return (
    <>
     

        <Routes>
          <Route path="/" element={<LobbyScreen />} />
        </Routes>
  
    </>
  )
}

export default App
