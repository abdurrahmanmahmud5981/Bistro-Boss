import { Outlet } from "react-router-dom"
import Footer from "../pages/Shared/Footer/Footer"
import Navber from "../pages/Shared/Navber/Navber"

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
        <header>
            <Navber/>
        </header>
        <Outlet/>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Main