import { Outlet } from "react-router-dom";
import Footer from "../../page/Shaerd/Footer/Footer";
import Navbar from "../../page/Shaerd/Navbar/Navbar";




const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;