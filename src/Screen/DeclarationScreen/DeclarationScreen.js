import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import Switch from '@mui/material/Switch';
import './DeclarationScreen.css'
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addDeclarationDetails } from '../../Redux/actions/declarationDetailsActions';

function DeclarationScreen() {

    const [switchValues, setSwitchValues] = useState({
        indian_citizen : false,
        indian_tax : false,
        polically_exposed : false
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        const panImageData = localStorage.getItem('pan_card');
        const sigImageData = localStorage.getItem('signature');
        const passImageData = localStorage.getItem('picture');


        if(!panImageData || !sigImageData || !passImageData){
            navigate('/documents');
        }

    }, []);

    const handleSwitchButtons = (e) => {

        let name = e.target.name;
        let value = switchValues[name];

        setSwitchValues({...switchValues, [name] : !value});

    }

    const nextScreen = () => {  

        let {indian_citizen, indian_tax, polically_exposed} = switchValues;

        if(indian_tax && indian_citizen && polically_exposed){  
            dispatch(addDeclarationDetails(switchValues));
            navigate('/confirm-details');
        }

        else{
            alert("Please confirm all options")
        }

    }

    return (
        <div style={{ width: '100%' }}>

            <Header
                heading="FATCA Declaration"
                desc="Declare your FATCA details"
                label="Declaration" />

            <div style={{
                width: '100%',
                marginTop: '16px'
            }}>

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    fontWeight: 500
                }}>Please verify that you are an:</span>


            </div>

            <div style={{ marginTop: '30px' }}>

                <div className='declaration_titles' >

                    <div style={{
                        width: 'fit-content',
                    }}>

                        <div style={{
                            width: 'fit-content',
                            marginTop: '20px',
                            height: '200px'

                        }}>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '15px',
                                fontFamily: 'Noto Sans'
                            }}>Indian Citizen </span>

                            <div style={{ marginTop: '15px' }}></div>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '15px',
                                fontFamily: 'Noto Sans',
                            }}>Indian tax resident</span>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '15px',
                                fontFamily: 'Noto Sans'
                            }}>Indian Citizen </span>

                            <div style={{ marginTop: '15px' }}></div>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '15px',
                                fontFamily: 'Noto Sans',
                            }}>Not politically exposed</span>

                        </div>

                    </div>

                    <div style={{
                        marginTop: '10px',
                        display: 'flex',
                        flexDirection: 'column'

                    }}>
                        <Switch onChange={(e) => handleSwitchButtons(e)} 
                            checked = {switchValues.indian_citizen} name = "indian_citizen"
                            sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#052F5F"
                            },
                            "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                                backgroundColor: '#052F5F',
                            },
                        }} />
                        <Switch onChange={(e) => handleSwitchButtons(e)} 
                            checked = {switchValues.indian_tax} name = "indian_tax" 
                            sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#052F5F"
                            },
                            "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                                backgroundColor: '#052F5F',
                            },
                        }} />
                        <Switch onChange={(e) => handleSwitchButtons(e)} 
                             checked = {switchValues.polically_exposed} name = "polically_exposed"
                             sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: "#052F5F"
                            },
                            "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                                backgroundColor: '#052F5F',
                            },
                        }} />
                    </div>

                </div>

            </div>

            <Buttons nextScreen={nextScreen}></Buttons>

        </div>
    )
}

export default DeclarationScreen