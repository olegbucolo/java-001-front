import { Outlet } from "react-router-dom";
import HeaderComp from '../components/header/HeaderComp';
import FooterComp from '../components/footer/FooterComp';

export default function DefaultLayout() {
    return (
        <div className="page max-w-300 mx-auto">
            <HeaderComp />
            <main>
                <Outlet />
            </main>
            <FooterComp />
        </div>
    )
}