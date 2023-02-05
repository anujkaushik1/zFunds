import React from 'react'
import "./RadioButton.css"


function RadioButtons(props) {

  return (
    <div style={{
      width: 'fit-content',
      marginTop: '8px',
      marginLeft: '15px'
    }}>

      <div className={`radio-btn-container ${props.isRow ? 'row' : "" }`} >
        {props.data.map((obj, idx) => (
          <label className="container" key={idx}>{obj.label}
            {
              obj.value === props.defaultValue ?
                <input type="radio" defaultChecked name={props.name} value={obj.value} onChange={e => { props.handleRadioState({ [`${e.target.name}`]: e.target.value }) }} /> :
                <input type="radio" name={props.name} value={obj.value} onChange={e => { props.handleRadioState({ [`${e.target.name}`]: e.target.value }) }} />
            }
            <span className="checkmark"></span>
          </label>
        ))}

      </div>
    </div>
  )
}

export default RadioButtons