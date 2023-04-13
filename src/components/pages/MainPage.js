import NavBlock from "../NavBlock";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <section className="main-section">
            <NavBlock/>
            <Outlet />
        </section>
    )
}

export default MainPage;