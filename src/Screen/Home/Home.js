import { Button } from '@mui/material'
import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/personal-details');
    }

  return (
    <div className='main'>

      <Header label = ""/>
        
        <div className='home_button'>
            
            <Button 
                variant="contained"  
                className='complete_kyc'
                onClick={handleClick}
                sx = {{
                    ':hover': {
                        background : '#32547C', 
                      },
                    height : '77px',
                    width : '230px', 
                    textTransform : 'none',
                    fontWeight : 700,
                    color : '#F1E2E2',
                    fontSize : '18px',
                    background: '#32547C',
                }}>
                Complete KYC
            </Button>

        </div>
    </div>
  )
}

export default Home