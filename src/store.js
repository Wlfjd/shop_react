import { configureStore, createSlice } from '@reduxjs/toolkit'


let cart= createSlice({
    name:'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ], 
      //state 변경 함수 만드는 곳
    reducers:{
        changeName(state){
            
        }
    }
})

export let {changeName} = cart.actions

export default configureStore({
  reducer: { 
    cart:cart.reducer
  }
}) 