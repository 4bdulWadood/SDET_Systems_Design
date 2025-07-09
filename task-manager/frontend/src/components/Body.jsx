import { useEffect } from "react";
import task from "../assets/home.png"
import Header from "./Header";
import { useSelector } from 'react-redux';

const Body = () => {
    const user = useSelector(state => state.userData);

    useEffect(() => {
        document.title = user.isLoggedIn ? `${user.name}'s tasks` : "Task Manager";
      }, [user]);

	return <>
    <Header/>
    <div className="flex items-center justify-center max-w-7xl mx-auto min-h-screen">
        <div className="font-sans w-1/2">
            <h1 className="text-5xl tracking-wider py-3 font-medium ">Stay Organized</h1>
            <h1 className="text-5xl tracking-wider py-3 font-medium ">Stay Creative</h1>
            <p className="py-3 tracking-wide font-light">Empower Your Productivity with Intuitive Task Management</p>
            <div className="py-10">
                <button className="px-4 py-3 text-white bg-blue-500 rounded font-bold text-lg">Get Started - It's free</button>
            </div>
        </div>
        <div className="w-3/5">
            <img alt="task manager" className="" src={task}/>
        </div>
    </div>
    </>
};

export default Body;
