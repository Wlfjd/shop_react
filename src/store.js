import { configureStore, createSlice } from '@reduxjs/toolkit'

let user=createSlice({
    name:'user',
    initialState:{name:'jiwon',age:25},
    
})

let cart= createSlice({
    name:'cart',
    initialState: [
      ], 
      //state 변경 함수 만드는 곳
    reducers:{
        changeCount(state,action){
            const index=state.findIndex((i)=>i.id===action.payload) //[0,1,...]
            state[index].count+=1
        },
        changeItem(state,action){
            if(state.some(item=>item.id===action.payload.id)){
                const index=state.findIndex((i)=>i.id===action.payload.id) //[0,1,...]
                state[index].count+=1
            }else {
                state.push(action.payload)
            }
        },
        deleteItem(state,action){
            const index=state.findIndex((i)=>i.id===action.payload.id)
            state.splice(index,1)
        }
    }
})

export let {changeCount,changeItem,deleteItem} = cart.actions

export default configureStore({
  reducer: { 
    cart:cart.reducer,
    user:user.reducer
  }
}) 