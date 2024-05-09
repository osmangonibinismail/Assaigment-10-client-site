import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div>
        <Header></Header>
        <div  className='min-h-[calc(100vh-116px)] border'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}
//  border-indigo-600

export default Root;
