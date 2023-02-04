import { Button } from '@mui/material'
import React from 'react'

function Buttons({nextScreen}) {
  return (
    <div style={{
        width : '100%',
        height : 'fit-content',
        display : 'flex',
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center'
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
                textTransform : 'none',
                fontWeight : 700,
                color : '#FFFFFF',
                fontSize : '18px',
                background: '#052F5F',
            }}>
            Next
        </Button>

        <span style={{
            fontSize: '14px',
            marginLeft: '15px',
            color: '#8E959F',
            fontFamily: 'Noto Sans',
            fontWeight: 600,
            marginTop: '5px',
            marginBottom : '20px'
        }}>SKIP FOR NOW</span>

    

    </div>
  )
}

export default Buttons