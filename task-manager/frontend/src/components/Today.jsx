import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tasks from './Tasks';
import api from '../utils/api';

const Today = () => {
    const navigate = useNavigate()
    const [showError,setShowError] = useState(false)
    const user = useSelector(store => store.userData)
    const taskId = useParams().id
    const Mode = !taskId? "add":"update"
    const [showAddTask,setShowAddTask] = useState(false)

    const [addData, setAddData] = useState({
        title:"",
        description: ""
    });

    useEffect(() => {
        if (Mode === "update") {
            const config = {headers: { Authorization: user.token } };
          api.get(`/tasks/${taskId}`,config)
          .then((response) => {
            setAddData({title:response.data.task.title, description: response.data.task.description }); 
          });
          setAddData(false)
        }
      }, [user, taskId]);


    const handleAddTask = async() => {
        if(addData.title === ""){
            setShowError(true)
            return 
        }
        const config = {
            headers:{
                Authorization: user.token
            },
        }
        const requestData = {
            title: addData.title,
            description: addData.description
        };
        if(Mode === "add"){
            try {
                await api.post('/tasks', requestData, config);

            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
        else if(Mode === "update"){
            try {
                await api.put(`/tasks/${taskId}`, requestData, config);
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
        setShowError(false)
        navigate("/home/tasks")
        setAddData({title:'', description: '' }); 
    }

	return <div className="p-4">
        <h1 className="text-xl py-4">Today</h1>
        <div>
            {
                showAddTask ? (
                    <div className="group hover:text-blue-400 cursor-pointer py-4 text-sm text-gray-400" onClick={() => setShowAddTask(false)}>
                <p><span className="text-blue-400 mr-1 px-1 text-lg rounded-full group-hover:bg-blue-400 group-hover:text-white ">+</span> Add task</p>
            </div>
                ) : (
                    <div className="border min-w-2xl flex flex-col p-2 rounded">
                <input type='text' className='min-w-[720px] py-1 font-bold text-sm outline-none' placeholder='Title' value={addData.title} 
    onChange={(e) => setAddData({...addData, title: e.target.value})}/>
                <textarea type='text' className='min-h-16 py-1 text-sm outline-none' placeholder='Description' style={{ overflowY: 'hidden', resize: 'vertical' }} value={addData.description} 
    onChange={(e) => setAddData({...addData, description: e.target.value})}/>
                <div className='py-1 border-t'>
                    {showError && <p className='text-xs text-red-600 py-2 font-medium'>! Please enter something</p>}
                    <button className='mr-4 text-white font-semibold px-2 py-1 rounded text-xs bg-red-500' onClick={handleAddTask}>{Mode === "add" ? "Add task" : "Update Task"}</button>
                    <button className='px-2 py-1 rounded text-xs font-medium bg-gray-100' onClick={() => setShowAddTask(true)}>Cancel</button>
                </div>
            </div>
                ) 
            }       
        </div>
        <Tasks handleAddTask = {handleAddTask}/>         
    </div>;
};

export default Today;
