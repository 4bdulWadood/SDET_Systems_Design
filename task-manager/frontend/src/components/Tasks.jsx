import {useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import api from "../utils/api";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Loader from "./Loader"
import taskLogo from "../assets/no-task.png"
import { showDescription } from "../redux/slice/taskSlice";

const Tasks = ({handleAddTask}) => {
    const [tasks,setTasks] = useState([])
    const user = useSelector(state => state.userData);
    const dispatch = useDispatch()

    const fetchTasks = async() => {
        const config = { headers: { Authorization: user.token } };
        const response = await api.get('/tasks', config)
        setTasks(response?.data?.tasks)
    };

    useEffect(() => {
        if(user.isLoggedin){
            fetchTasks();
        }
    }, [user,handleAddTask]);

    const handleDelete =async (id) => {
        const config = {headers: { Authorization: user.token } };
        api.delete(`/tasks/${id}`,config)
        .then(() => fetchTasks())
        dispatch(showDescription(''))
        fetchTasks()
    }

    return user.isLoading ? (
            <Loader/>
        ):(
            <div className='bg-white my-4 p-4 text-gray-600 rounded-md shadow'> 
            {
                tasks.length === 0 ? (
                    <div className="flex flex-col items-center">
                    <img alt="no task found" className="" src={taskLogo}/>
                    <h1 className="text-sm py-4 text-gray-500">Have no idea where to organize the tasks? Add them here.</h1>
                    </div>
                ) : (
                    tasks.map((task) => (
                        <div key={task._id} className="py-1 flex items-center">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                
                            />
                            <p className={`pl-2 min-w-[580px] font-bold text-sm outline-none ml-2 cursor-pointer`} onClick={() => dispatch(showDescription(task._id))}>
                                {task.title}

                            </p>
                            <Link to={`/home/tasks/${task._id}`}>
                            <button className="ml-2  text-lg py-1">
                            <MdOutlineEdit />
                            </button></Link>
                            <button className="ml-2 text-red-600 text-lg py-1" onClick={() => handleDelete(task._id)}>
                            <MdDeleteOutline />
                            </button>
                        </div>
                    ))
                )
            }
            </div>
        )
};

export default Tasks;
