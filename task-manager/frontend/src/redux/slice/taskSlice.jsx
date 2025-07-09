import {createSlice} from '@reduxjs/toolkit'


const taskSlice = createSlice({
    name:"taskData",
    initialState:{
        descriptionId:''
    },
    reducers:{
        showDescription:(state,action) => {
            state.descriptionId = action.payload
        }
    },
})

export const {showDescription} = taskSlice.actions

export default taskSlice.reducer
