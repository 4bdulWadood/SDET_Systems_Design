import  { useCallback, useState } from "react";
import api from "./api"

const useFetchData = () => {

    const [data,setData] = useState({
        loading:false,
        data:null,
        ErrorMsg:"",
        successMsg:""
    })

    const fetchData = useCallback(async(config,options) => {
        setData(data => ({...data,loading:true}))

            const response = await api.request(config)
            setData({
                loading:false,
                data:response,
                successMsg:response.message || "success",
                ErrorMsg:""
            })
            return Promise.resolve(data);
        
    },[])

    return [fetchData,data]
};

export default useFetchData;
