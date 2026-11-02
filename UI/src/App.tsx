import { Toaster } from "sonner"
import Dashboard from "./Pages/Dashboard"
import { CheckReload } from "./Components/Reload"


function App() {
  CheckReload()


  return (
    <>
      <Toaster closeButton richColors position="bottom-right"></Toaster>


      <Dashboard></Dashboard>


    </>
  )
}

export default App