import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import form from './Form';


export const store = configureStore({
  reducer: {
    form
  },
})


export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>