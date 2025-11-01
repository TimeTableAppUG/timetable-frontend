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
        <div className="w-full">
            <nav className="flex flex-col md:flex-row justify-evenly items-center cursor-default bg-gray-100 w-full ">
                {navItems.map((item, id) => {
                    return (
                        <div onClick={() => handleNavItem(item)} className="w-full md:w-auto">
                            <NavItem navName={item} navItemSelected={navItemSelected} />
                        </div>
                    )
                })}


            </nav>
            <hr className="border-1 border-gray-300"></hr>
        </div>
    )
}