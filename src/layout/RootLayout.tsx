import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Reminder from "../components/Reminder";
// import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Reminder />
            {/* <Footer /> */}
        </>
    );
};

export default RootLayout;
