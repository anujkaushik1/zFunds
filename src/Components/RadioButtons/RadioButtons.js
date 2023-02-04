import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButtons(props) {

    let {userData} = props;

    const handleRadioButtons = (e) => {
        let value = e.target.value;
        
        if(props.radioGroup == 1){
            userData = {...userData, ['martial_status'] : value};
        }

        else if(props.radioGroup == 2){
            userData = {...userData, ['annual_income'] : value};

        }

        props.updateParentState({...userData});
    }
  

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
                    <FormControlLabel style={{color : '#052F5F'}} key={idx} onChange = {(e) => handleRadioButtons(e)} value={obj.value} control={<Radio />} label= {obj.label} />
                ))}
                
            </RadioGroup>
        </FormControl>

    </div>
  )
}

export default RadioButtons