import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import api from "../utils/api";
import Loader from "./Loader";
import descImg from "../assets/description.png"

const Description = () => {
    const [taskData,setTaskData] = useState([])
    const user = useSelector(store => store.userData)
    const {descriptionId} = useSelector(store => store.taskData)

    useEffect(() => {
        if(descriptionId){
            const config = {headers: { Authorization: user.token } };
            api.get(`/tasks/${descriptionId}`,config)
            .then((response) => {
                setTaskData({title:response.data.task.title, description: response.data.task.description }); 
            });
        }
        else{
            setTaskData([])
        }
        console.log(descriptionId)
        console.log(taskData)
      }, [user, descriptionId]);

	return user.isLoading ? (
        <Loader/>
    ) : (
        taskData.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-screen">
                <img src={descImg}/>
                <p className="text-gray-600">Click task title to view the detail</p>
            </div>
        ) : (
            <div className="p-6 w-full">
                <div className="border-b pb-2">
                  Description  
                </div>
                <div className="text-sm">
                    <h1 className="py-2 font-semibold">{taskData.title}</h1>
                    <p>{taskData.description}</p>
                </div>
            </div>
        ) 
    )
};

export default Description;
