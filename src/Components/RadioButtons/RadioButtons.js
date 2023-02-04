import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButtons(props) {

  return (
    <div style={{
        width: 'fit-content',
        marginTop: '8px',
        marginLeft: '15px'
    }}>

        <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={props.defaultValue}
                name="radio-buttons-group"
                row = {props.isRow}
                
            >
                {props.data.map((obj, idx) => (
                    <FormControlLabel key={idx} value={obj.value} control={<Radio />} label= {obj.label} />
                ))}
                
            </RadioGroup>
        </FormControl>

    </div>
  )
}

export default RadioButtons