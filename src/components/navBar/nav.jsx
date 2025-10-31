import NavItem from './navItem'

export default function NavBar() {

    const navItems = [
        "Dashboard",
        "Upload Timetable",
        "Notifications",
        "Logout"
    ]
    return (
        <>
            <nav className="flex justify-evenly items-center cursor-default bg-gray-100">
                {navItems.map((item, id) => {
                    return (
                        <NavItem navName={item} />
                    )
                })}


            </nav>
            <hr></hr>
        </>
    )
}