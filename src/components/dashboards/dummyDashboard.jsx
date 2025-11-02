import { useContext } from 'react';
import NavBar from '../navBar/nav'
import NavItem from '../navBar/navItem';
import { Outlet } from 'react-router'

export default function DummyDashboard() {
    return (
        <div className=" p-10">
            {/* <p>DUMMY DASHBOARD</p> */}
            <NavBar />

            <Outlet />
        </div>)
}