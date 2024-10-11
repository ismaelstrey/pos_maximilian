import { Outlet } from "react-router-dom";
import MainHeader from "../components/Header/MainHeader";


export default function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}
