import NavItem from './navItem';
import { useState } from 'react'

export default function NavBar() {

    const navItems = [
        "Dashboard",
        "Upload Timetable",
        "Notifications",
        "Logout"
    ]

    const [navItemSelected, setNavItemSelected] = useState(false)
    function handleNavItem(item) {
        setNavItemSelected(item)
    }


    return (
        <>
            <nav className="flex justify-evenly items-center cursor-default bg-gray-100">
                {navItems.map((item, id) => {
                    return (
                        <div onClick={() => handleNavItem(item)}>
                            <NavItem navName={item} navItemSelected={navItemSelected} />
                        </div>
                    )
                })}


            </nav>
            <hr className="border-1 border-gray-300"></hr>
        </>
    )
}