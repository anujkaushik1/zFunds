import React, { useCallback, useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, TextField } from '@mui/material/';
import './PersonalDetails.css'
import RadioButtons from '../../Components/RadioButtons/RadioButtons';
import { martialStatus } from '../../Data/MartialStatus';
import Header from '../../Components/Header/Header';
import { annualIncome } from '../../Data/AnnualIncome';
import { useLocation, useNavigate } from 'react-router-dom';
import Buttons from '../../Components/Buttons/Buttons';
import { useDispatch } from 'react-redux';
import { addPersonalDetails } from '../../Redux/actions/personalDetailsActions';



function PersonalDetails() {

    // State hook to store the value of selected radio button
    const [radioButtonVal, setRadioButtonVal] = useState("@gmail.com");

    const [userData, setUserData] = useState({
        father_name: '',
        mother_name: '',
        martial_status: 'Single',
        annual_income: 'Below 1 Lakh'
    })

    const [error, setError] = useState({
        father_name: false,
        mother_name: false,
        emailRes: false
    })

    const [defaultValue, setDefaultValue] = useState({
        radioGrp1 : "Single",
        radioGrp2 : "Below 1 Lakh"
    })

    const [email, setEmail] = useState('');

    // Dispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Hook to check the screen size
    const isSmallScreen = useMediaQuery('(max-width: 600px)');


    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {

        if(location.state){
            const data = location.state.personalDetailsReducer.data;
            const {father_name,mother_name,martial_status,annual_income, email} = data;
            
            let idxAtTheRate = email.indexOf('@');
            
            let resEmail = email.substring(0, idxAtTheRate);

            setUserData({
                ...userData,
                father_name : father_name,
                mother_name : mother_name,
                martial_status : martial_status,
                annual_income : annual_income,
            });

            setDefaultValue({
                ...defaultValue,
                radioGrp1 : martial_status,
                radioGrp2 : annual_income
            })

            setEmail(resEmail);

        }


    }, []);


    const handleInputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        
        if (name === 'email') {

            // check if the value of the email field ends with the value of the radio button

            if (value.endsWith(radioButtonVal)) {

                // remove the value of the radio button from the email field

                const modiValue = value.replace(radioButtonVal, "");
                setEmail(modiValue);
            }

        }

        setUserData({ ...userData, [name]: value });
    }

    const updateParentState = useCallback((newData) => {
        setUserData(newData);
    })

    const handleRadioButton = (e) => {

        // update the radioButtonVal state with the value of the selected radio button

        setRadioButtonVal(e.currentTarget.value);
    }

    const nextScreen = (e) => {

        const isValidate = validation(userData);

        if (!isValidate)
            return;

        // dispatch the addPersonalDetails action with the userData state
        dispatch(addPersonalDetails(userData));

        // navigate to the document screen

        navigate('/documents')

    }

    const validation = ({ father_name, mother_name }) => {

        father_name = father_name === '' ? true : false;
        mother_name = mother_name === '' ? true : false;

        let emailRes = email;

        emailRes = emailRes === '' ? true : false;

        setError({ father_name, mother_name, emailRes });

        // return true if none of the fields are empty, else return false
        if (!father_name && !mother_name && !emailRes)
            return true;



        return false;

    }


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

                <RadioButtons userData={userData} radioGroup={1}
                    data={martialStatus} updateParentState={updateParentState}
                    defaultValue= {defaultValue.radioGrp1} isRow={true} />

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
                    error={error.father_name}
                    size={isSmallScreen ? 'small' : 'medium'}
                    value={userData.father_name}
                    name="father_name"
                    onChange={(e) => handleInputs(e)}
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
                    size={isSmallScreen ? 'small' : 'medium'}
                    value={userData.mother_name}
                    name="mother_name"
                    error={error.mother_name}
                    onChange={(e) => handleInputs(e)}
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
                    size={isSmallScreen ? 'small' : 'medium'}
                    value={email + radioButtonVal}
                    name="email"
                    onChange={(e) => handleInputs(e)}
                    error={error.emailRes}
                    variant="outlined" />

                <span style={{
                    fontSize: '14px',
                    marginLeft: '15px',
                    color: '#8E959F',
                    fontFamily: 'Noto Sans',
                    fontWeight: 600,
                    marginTop: '5px'
                }}>You will receive portfolio statements on this email id</span>

                <div className="email-btns">

                    <div>
                        <input onChange={(e) => handleRadioButton(e)} className='personaldetails_radio_input' type="radio" id="gmail" name="drone" value="@gmail.com"
                            defaultChecked />
                        <label className={`personaldetails_radio ${radioButtonVal === '@gmail.com' && "clicked"}`} htmlFor="gmail">@gmail.com</label>
                    </div>

                    <div>
                        <input onChange={(e) => handleRadioButton(e)} className='personaldetails_radio_input' type="radio" id="yahoo" name="drone" value="@yahoo.com"
                        />
                        <label className={`personaldetails_radio ${radioButtonVal === '@yahoo.com' && "clicked"}`} htmlFor="yahoo">@yahoo.com</label>
                    </div>

                    <div>
                        <input onChange={(e) => handleRadioButton(e)} className='personaldetails_radio_input' type="radio" id="yahoo.co" name="drone" value="@yahoo.co.in"
                        />
                        <label className={`personaldetails_radio ${radioButtonVal === '@yahoo.co.in' && "clicked"}`} htmlFor="yahoo.co">@yahoo.co.in</label>
                    </div>

                    <div>
                        <input onChange={(e) => handleRadioButton(e)} className='personaldetails_radio_input' type="radio" id="rediffmail" name="drone" value="@rediffmail.com"
                        />
                        <label className={`personaldetails_radio ${radioButtonVal === '@rediffmail.com' && "clicked"}`} htmlFor="rediffmail">@rediffmail.com</label>
                    </div>

                </div>

            </div>

            <div style={{ marginTop: '20px' }}>

                <span style={{
                    fontSize: '16px',
                    marginLeft: '15px',
                    color: '#052F5F',
                    fontWeight: 700,
                }}>Annual Income</span>

                <RadioButtons userData={userData} radioGroup={2}
                    data={annualIncome} updateParentState={updateParentState}
                    defaultValue= {defaultValue.radioGrp2} isRow={false} />

            </div>

            <Buttons nextScreen={nextScreen}></Buttons>

        </div>
    )
}


export default PersonalDetails