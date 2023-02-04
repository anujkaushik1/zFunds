import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextField } from '@mui/material/';
import './PersonalDetails.css'
import RadioButtons from '../../Components/RadioButtons/RadioButtons';
import { martialStatus } from '../../Data/MartialStatus';
import Header from '../../Components/Header/Header';


function PersonalDetails() {

    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <div style={{ height: '100%', width: '100%' }}>

            <Header
                heading="Personal Details"
                desc="These details are required to complete your KYC verification."
                label="Personal Details" />

            <div style={{
                width: '100%',
                marginTop: '16px'
            }}>

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    fontWeight: 700
                }}>Martial Status</span>

                <RadioButtons data={martialStatus} defaultValue="Single" isRow={true} />

            </div>

            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                marginTop: '16px',
            }}>

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    fontWeight: 700
                }}>Father’s Name</span>

                <TextField
                    id="outlined-basic"
                    sx={{
                        width: '90%',
                        marginLeft: '15px',
                        marginTop: '5px',

                    }}
                    label="Enter father’s name here"
                    className='textfield-border'
                    // disabled={loading}
                    size={isSmallScreen ? 'small' : 'medium'}
                    // value={userData.first_name}
                    name="first_name"
                    // onChange={(e) => handleInputs(e)}
                    // error={error.first_name}
                    variant="outlined" />

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    marginTop: '20px',
                    fontWeight: 700
                }}>Mother's Name</span>

                <TextField
                    id="outlined-basic"
                    sx={{
                        width: '90%',
                        marginLeft: '15px',
                        marginTop: '5px',

                    }}
                    label="Enter mother’s name here"
                    className='textfield-border'
                    // disabled={loading}
                    size={isSmallScreen ? 'small' : 'medium'}
                    // value={userData.first_name}
                    name="first_name"
                    // onChange={(e) => handleInputs(e)}
                    // error={error.first_name}
                    variant="outlined" />

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    marginTop: '20px',
                    fontWeight: 700
                }}>Email</span>

                <TextField
                    id="outlined-basic"
                    sx={{
                        width: '90%',
                        marginLeft: '15px',
                        marginTop: '5px',

                    }}
                    label="Email"
                    className='textfield-border'
                    // disabled={loading}
                    size={isSmallScreen ? 'small' : 'medium'}
                    // value={userData.first_name}
                    name="first_name"
                    // onChange={(e) => handleInputs(e)}
                    // error={error.first_name}
                    variant="outlined" />

                <span style={{
                    fontSize: '14px',
                    marginLeft: '15px',
                    color: '#8E959F',
                    fontFamily: 'Noto Sans',
                    fontWeight: 600,
                    marginTop: '5px'
                }}>You will receive portfolio statements on this email id</span>

                <div style={{
                    display : 'flex', 
                    marginTop : '15px',
                    marginLeft : '15px',
                    justifyContent : 'space-around'
                    }}>

                    <div>
                        <input type="radio" id="gmail" name="drone" value="gmail"
                            checked />
                        <label style={{}} for="gmail">@gmail.com</label>
                    </div>

                    <div>
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey">Dewey</label>
                    </div>

                    <div>
                        <input type="radio" id="louie" name="drone" value="louie" />
                        <label for="louie">Louie</label>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default PersonalDetails