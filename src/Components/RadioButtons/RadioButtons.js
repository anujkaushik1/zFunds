import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { withStyles } from '@mui/material';


function RadioButtons(props) {

    const [defaultValue, setDefaultValue] = useState('');

    useEffect(() => {

      if(!window.location.state){
        setDefaultValue(props.defaultValue);
      }

    }, [window.location.state])
    
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
                value={defaultValue}
                onChange = {e => setDefaultValue(e.target.value)}
                name="radio-buttons-group"
                row = {props.isRow}
                
            >
                {props.data.map((obj, idx) => (
                    <FormControlLabel style={{color : '#052F5F'}} key={idx} 
                      onChange = {(e) => handleRadioButtons(e)} value={obj.value}
                      sx = {{color : 'red'}}
                      control={<Radio sx={{
                        '&.Mui-checked': {
                          color: '#04305C',
                        },
                      }}/>} label= {obj.label} />
                ))}
                
            </RadioGroup>
        </FormControl>

    </div>
  )
}

export default RadioButtons