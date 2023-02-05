import { Button } from '@mui/material'
import React from 'react'

function Buttons({nextScreen, style}) {
  return (
    <div style={{
        width : '100%',
        height : 'fit-content',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        marginTop:"30px",
        marginBottom:"30px",
        ...style
    }}>

        <Button 
            variant="contained"  
            className='complete_kyc'
            onClick={(e) => nextScreen(e)}
            sx = {{
                ':hover': {
                    background : '#052F5F', 
                },
                height : '56px',
                width : '30%',
                minWidth:"320px", 
                textTransform : 'none',
                fontWeight : 700,
                color : '#FFFFFF',
                fontSize : '18px',
                background: '#052F5F',
            }}>
            Next
        </Button>

        <div style={{marginTop : '15px'}}></div>

        <span style={{
            fontSize: '14px',
            marginLeft: '15px',
            color: '#8E959F',
            fontFamily: 'Noto Sans',
            fontWeight: 600,
            marginBottom : '20px'
        }}>SKIP FOR NOW</span>

    

    </div>
  )
}

export default Buttons