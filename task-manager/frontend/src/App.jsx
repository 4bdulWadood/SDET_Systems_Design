import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Signup from "./components/Signup";
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from "react";
import { saveProfile } from "./redux/slice/user";
import Home from "./components/Home";
function App() {
	const user = useSelector(store => store.userData)
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) return;
		dispatch(saveProfile(token));
	}, [user.isLoggedIn, dispatch]);

	return (
		<BrowserRouter> 
			<Routes>
				<Route path="/" element={<Body/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="/home/tasks" element={<Home/>} />
				<Route path="/home/tasks/:id" element={<Home/>} />
				<Route path="/signup" element={user.isLoggedin ? <Navigate to={'/'}/>:<Signup/>} />
			</Routes>
		</BrowserRouter>
	);
} 
 
export default App; 
