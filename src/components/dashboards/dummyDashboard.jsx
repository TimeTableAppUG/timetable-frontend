import { useContext } from 'react';
import NavBar from '../navBar/nav'
import NavItem from '../navBar/navItem';

export default function DummyDashboard() {
    return (
        <div className=" p-10">
            {/* <p>DUMMY DASHBOARD</p> */}
            <NavBar />
            <NavItem navName="TEST" />
        </div>)
}