export default function NavItem({ navName }) {
    let navItemSelected = false

    function handleNavItem() {
        navItemSelected = !navItemSelected

    }
    return (
        <div onClick={handleNavItem} className="grid justify-center items-center pt-5">
            <p className={navItemSelected ? 'text-indigo-600 text-center' : 'text-gray-600 text-center'}>{navName}</p>
            {navItemSelected ?
                <hr className="w-full pt-5 pl-5 pr-5 pb-0 border-2 border-indigo-600"></hr>
                :
                <div className="w-full pt-5 pl-5 pr-5 pb-0 "></div>
            }
        </div>
    )
}