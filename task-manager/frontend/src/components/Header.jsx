import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
	return <div className="shadow-md">
        <div className="flex justify-between py-4 items-center max-w-7xl mx-auto">
            <img className="h-10 " src={logo}/>
            <ul className="flex items-center gap-6 text-gray-700 text-sm">
                <li><Link to={'/login'}>Sign in </Link></li>
                <li className="px-5 border rounded py-2 transition duration-200 cursor-pointer hover:border-black"><Link to={'/signup'}>Sign up </Link></li>
            </ul>
        </div>
    </div>;
};

export default Header;
