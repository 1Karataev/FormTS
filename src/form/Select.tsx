import { InputLabel, Select, FormControl, Box, MenuItem, SelectChangeEvent } from '@mui/material';
import React from 'react'
import classes from './Form.module.scss'

type citi = {
  id: string,
  name:string,
  
}
interface SelectProps {
  sel: string;
  obj: Array<string> | Array<citi>;
  reg: Object;
}

const FormSelect: React.FC<SelectProps> = ({ sel, obj, reg }) => {
  const [value, setValue] = React.useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }} className={classes.select}>
      <FormControl style={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-label">{sel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          className={classes.select_sel}
          label={sel}
          {...reg}
          onChange={handleChange}>
          {obj.map((item, i) => (
            <MenuItem key ={i} value={typeof item == 'string' ? item : item.name}>
              {typeof item == 'string' ? item : item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormSelect