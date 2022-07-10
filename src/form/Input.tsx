import { TextField } from "@mui/material";
import classes from './Form.module.scss';
import React from 'react'

const Input:React.FC = ()=>{
  return (
  <TextField
  required
  id="outlined-required"
  label="Ваше имя"
  placeholder="Иван"
  className={classes.inputs_input}
  error={false}
/>

  )
}

export default Input


