import { InputLabel, Select, FormControl, Box, MenuItem, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './Form.module.scss'
import { setCiti } from '../redux/Form';

type citi = {
  id: string,
  name:string,
  
}
interface SelectProps {
  required: boolean;
  sel: string;
  obj: Array<string> | Array<citi>;
  reg: Object;
}

const FormSelect: React.FC<SelectProps> = ({required, sel, obj, reg}) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    dispatch(setCiti(event.target.value as string));
    
  };
 
  return (
    <Box sx={{ minWidth: 120 }} className={classes.select}>
      <FormControl style={{ width: '100%' }} error={error}>
        <InputLabel id="demo-simple-select-label">{sel}</InputLabel>
        <Select
          required={required}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          className={classes.select_sel}
          label={sel}
          {...reg}
          onChange={handleChange}>
          {obj.map((item, i) => (
            <MenuItem key={i} value={typeof item == 'string' ? item : item.name}>
              {typeof item == 'string' ? item : item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect


