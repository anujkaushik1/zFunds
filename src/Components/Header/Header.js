import React from 'react'
import { Typography } from '@mui/material'

function Header(props) {
  return (
    <div>
        <div
                style={{
                    height: '9.5vh',
                    width: '100%'
                }}>
                <Typography
                    variant='h5'
                    fontWeight={700}
                    marginLeft='15px'
                    marginTop='30px'
                    color='#052F5F'>
                    {props.heading}
                </Typography>

                <div style={{
                    width: '50px',
                    height: '2px',
                    backgroundColor: 'green',
                    marginLeft: '15px',
                    padding: 0
                }} />

                <div style={{marginTop : '14px'}}></div>

                <span style={{
                    color: '#052F5F',
                    marginLeft: '15px',
                }}>
                    {props.desc}
                </span>



            </div >
            {
                props.label !== '' && 
                <div style={{
                    width: '100%',
                    marginTop : '15px',
                    height: '50px',
                    backgroundColor: '#EFF3F6',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{
                        fontSize: '18px',
                        marginLeft: '15px',
                        color: '#052F5F',
                        fontWeight: 600
                    }}>{props.label}</span>
                </div>
            }
            
    </div>
  )
}

export default Header