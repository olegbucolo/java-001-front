import { Outlet } from "react-router-dom";
import HeaderComp from '../components/header/HeaderComp';
import FooterComp from '../components/footer/FooterComp';

export default function DefaultLayout() {
    return (
        <>
            <HeaderComp />
            <Outlet />
            <FooterComp/>
        </>
    )
}