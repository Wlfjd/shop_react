import { configureStore, createSlice } from '@reduxjs/toolkit'

let user=createSlice({
    name:'user',
    initialState:{name:'jiwon',age:25},
    reducers:{
        changeName(state){

        }
    }
})

let cart= createSlice({
    name:'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ], 
      //state 변경 함수 만드는 곳
    reducers:{
        changeCount(state,action){
            const index=state.findIndex((i)=>i.id===action.payload) //[0,1,...]
            state[index].count+=1
        },
        changeItem(state,action){
            state.push(action.payload)
        }
    }
})

export let {changeCount,changeItem} = cart.actions

export default configureStore({
  reducer: { 
    cart:cart.reducer,
    user:user.reducer
  }
}) 