import { IoChevronDown } from "react-icons/io5"
import {useDispatch} from "react-redux"
import { LuCalendarDays } from "react-icons/lu";
import Today from "./Today";
import { logOut } from "../redux/slice/user";
import Description from "./Description";
const Home = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token');
        document.location.href = '/'
        dispatch(logOut())
    }

    return (
    <div className="grid grid-cols-6">
        <div className="col-span-1 w-60 h-screen px-4 py-4 bg-gray-100 bg-opacity-50 border-r">    
            <div className="flex justify-between">
                <div className="group py-1 w-fit px-1 text-sm rounded flex gap-1 cursor-pointer items-center hover:bg-gray-200">
                    <p className="font-medium pl-1">Gourav</p>
                    <span className="group-hover:text-black text-gray-700"><IoChevronDown /></span>
                </div>
                <button className="px-3 py-1 text-sm bg-gray-200 rounded" onClick={handleLogout}>Logout</button>
                {/* will show accordian after so adding many features */}
                {/* <div className="absolute right-5 z-10 mt-2 left-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm">Support</a>
                    <form method="POST" action="#" role="none">
                        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
                    </form>
                    </div>
                </div> */}
            </div>
            <div className="py-2 text-sm ">
                <ul className="text-gray-800">
                    <li>
                        <a href="#"
                            className="flex items-center p-2 text-base rounded-lg hover:bg-gray-200">
                            <span className="text-lg"><LuCalendarDays /></span>
                            <span className="ml-2 text-sm">Today</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="border-r col-span-3">
            <Today/>
        </div>
        <div className="col-span-2">
            <Description/>   
        </div>
    </div>)
};

export default Home;
