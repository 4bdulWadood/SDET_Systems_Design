import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/user'
import taskSlice from './slice/taskSlice'



const appStore = configureStore({
    reducer:{
        userData: userReducer,
        taskData: taskSlice
    }
})

export default appStore