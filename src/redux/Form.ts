import { createSlice, PayloadAction } from '@reduxjs/toolkit'
 export  interface FormState {
  name:string,
  namber:string|number,
  email:string,
  link:string,
  citi:string,
  org:string,
  fam:string, 
  sources:string,
}

const initialState:FormState = {
  name:'',
  namber:'',
  email:'',
  link:'',
  citi:'',
  org:'',
  fam:'', 
  sources:''
}
const formSlice = createSlice({
name:'form', 
initialState, 
reducers:{
setForm(state, action: PayloadAction<FormState>){
  state = action.payload
  console.log(JSON.stringify(state))
}
}

})
export const {setForm } = formSlice.actions

export default formSlice.reducer