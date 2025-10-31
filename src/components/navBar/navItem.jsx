import { useState } from 'react'

export default function NavItem({ navName, navItemSelected }) {
    // const [navItemSelected, setNavItemSelected] = useState(false)


    return (
        <div className={navItemSelected == navName ? "flex flex-col justify-between items-center pt-5 font-semibold cursor-default w-40 bg-white/70" : "flex flex-col justify-between items-center pt-5 font-semibold cursor-default w-40"}>
            <p className={navItemSelected == navName ? 'text-indigo-600 text-center' : 'text-gray-600 text-center'}>{navName}</p>
            {navItemSelected == navName ?
                <hr className="w-full  border-2 rounded-sm mt-5 mr-5 ml-5 mb-0 border-indigo-600"></hr>
                :
                <div className="w-full pt-5 pl-5 pr-5 pb-0 "></div>
            }
        </div>
    )
}