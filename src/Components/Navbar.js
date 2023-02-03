import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return (
        <div>
            <div style={{ height: '32px', width: '100%', backgroundColor: '#757575' }}></div>
            <Box sx={{ flexGrow: 1, borderBottom: 3, borderColor : 'lightgray'  }}>
                <AppBar elevation={0} position="static" sx={{ height: '55.59px', background : '#FFFFFF'}}>
                    <Toolbar>
                        <div 
                          style={{
                                height : '100%', 
                                alignItems : 'center',
                                width : '3vw' ,
                                display : 'flex' ,
                                justifyContent : 'center',
                                cursor : 'pointer'
                             }}>
                            <ArrowBackIosIcon 
                                sx = {{
                                        height : '15px', 
                                        color : '#052F5F',
                                        stroke : '#052F5F',
                                        strokeWidth : '2'
                                     }}/> 
                            <Typography 
                                component='span'
                                sx={{
                                    fontSize : '16px', 
                                    fontWeight : 'bold',    
                                    color : '#052F5F',

                                   }}>
                                Back
                            </Typography>
                        </div>

                        <div 
                            style={{
                                    height : '100%', 
                                    width : '100%',
                                    display : 'flex',
                                    justifyContent : 'center',
                                    alignItems : 'center'
                                  }}>     
                            <img 
                                style={{
                                        height : '47.59px', 
                                        width : '96px',
                                      }} 
                                src="https://zfunds.in/static/logo.png"/>
                        </div>

                        <div 
                            style={{
                                display : 'flex',
                                justifyContent : 'center',
                                alignItems : 'center',
                                height : '100%',
                                position : 'relative',
                                right : '50px',
                                
                            }}>
                            <SearchIcon 
                                sx={{
                                    color : '#052F5F',
                                    height : '20px',
                                    width : '30px'
                                }}/>
                            <ShoppingCartIcon
                                sx = {{
                                    color : '#052F5F',
                                    height : '20px',
                                    width : '30px',
                                    position : 'relative',
                                    left : '40px'
                                }}/>
                        </div>
                        
                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Navbar