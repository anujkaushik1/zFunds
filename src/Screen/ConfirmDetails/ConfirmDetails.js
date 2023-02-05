import './ConfirmDetails.css'
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import EditIcon from '@mui/icons-material/Edit';
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePersonalDetails } from '../../Redux/actions/personalDetailsActions';
import { deleteDeclarationDetails } from '../../Redux/actions/declarationDetailsActions';


const ConfirmDetails = () => {

    const [panDoc, setPanDoc] = useState(null);
    const [sigDoc, setSigDoc] = useState(null);
    const [passDoc, setPassDoc] = useState(null);

    const personalDetailsReducer = useSelector(state => state.personalDetailsReducer);
    const declarationDetailsReducer = useSelector(state => state.declarationDetailsReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        const { data } = personalDetailsReducer;


        if (Object.keys(data).length === 0) {
            navigate('/personal-details');
        }

        const panImageData = localStorage.getItem('pan_card');
        const sigImageData = localStorage.getItem('signature');
        const passImageData = localStorage.getItem('picture');


        setPanDoc(panImageData);
        setSigDoc(sigImageData);
        setPassDoc(passImageData);


    }, [])

    const nextScreen = (e) => {

        const cb = window.document.querySelector('#termsNcondition');
        if(cb.checked){
            alert('Data Submitted Successfully');
            deleteData();
            navigate('/personal-details');
        }else{
            alert('Please read Terms and conditions to continue.')
        }
    }

    const deleteData = () => {

        dispatch(deletePersonalDetails());
        dispatch(deleteDeclarationDetails());
        localStorage.removeItem('pan_card');
        localStorage.removeItem('signature');
        localStorage.removeItem('picture');
    }

    const editKYCDetails = (e) => {

        navigate('/personal-details', {state : {personalDetailsReducer}});

    }

    const editDocuments = (e) => {

        navigate('/documents');
    }

    const editUserDetails = (e) => {

        navigate('/declaration', {state : declarationDetailsReducer});

    }


    return (
        <div>
            <Header
                heading="KYC Details"
                desc="Read below details carefully, they cannot be changed later."
                label="Confirm Details" />

            <div className='blocks-container'>
                <div className='confirm-block'>
                    <h2>User Details</h2>
                    <div>
                        <h3>PAN Card Number</h3>
                        <p>Indian citizen</p>
                    </div>
                    <div>
                        <h3>Name</h3>
                         <p>Tanvi Jadhav</p>
                    </div>
                    <div className='edit-btn-container'>
                        <EditIcon />
                        <button onClick={(e) => editUserDetails(e)}>Edit</button>
                    </div>
                </div>

                <div className='confirm-block'>
                    <h2>Personal Details</h2>
                    <div>
                        <h3>Gender</h3>
                        <p>Male</p>
                    </div>
                    <div>
                        <h3>Date of Birth</h3>
                        <p>DD/MM/YYYY</p>
                    </div>
                    <div>
                        <h3>Address</h3>
                        <p>250 flat no, second floor, Sector 57, Sushant Lok Phase 2</p>
                    </div>
                    <div>
                        <h3>Pincode</h3>
                        <p>122003</p>
                    </div>
                    <div className='empty-div'></div>
                    <div className='block-footer'>
                        <p><span>Note:</span> You cannot edit above details as they are already verified through Digilocker.</p>
                    </div>

                </div>

                <div className='confirm-block'>
                    <h2>KYC Details</h2>
                    <div>
                        <h3>Email</h3>
                        <p>{personalDetailsReducer.data.email}</p>
                    </div>
                    <div className='row-container'>
                        <div className='col-container'>
                            <div>
                                <h3>Martial Status</h3>
                                <p>{personalDetailsReducer.data.martial_status}</p>
                            </div>
                            <div>
                                <h3>Father's Name</h3>
                                <p>{personalDetailsReducer.data.father_name}</p>
                            </div>
                        </div>
                        <div className='col-container'>
                            <div>
                                <h3>Annual Income</h3>
                                <p>{personalDetailsReducer.data.annual_income}</p>
                            </div>
                            <div>
                                <h3>Mother's Name</h3>
                                <p>{personalDetailsReducer.data.mother_name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='edit-btn-container'>
                        <EditIcon />
                        <button onClick={(e) => editKYCDetails(e)}>Edit</button>
                    </div>
                </div>
                <div className='confirm-block'>
                    <h2>Documents</h2>
                    <div className='row-container' style={{ width: "100%" }}>
                        <div className='col-container'>
                            <h1>Photo</h1>
                            <div className='pancard_upload'>

                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    {
                                        passDoc &&
                                        <img className='image' src={passDoc} alt='Photo' />
                                    }
                                </div>

                            </div>
                        </div>
                        <div className='col-container'>
                            <h1>PAN Card</h1>
                            <div className='pancard_upload'>
                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    {
                                        panDoc &&
                                        <img className='image' src={panDoc} alt='Photo' />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-container'>
                            <h1>Signature</h1>
                            <div className='pancard_upload'>
                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    {
                                        sigDoc &&
                                        <img className='image' src={sigDoc} alt='Signature' />
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='edit-btn-container'>
                        <EditIcon />
                        <button onClick={(e) => editDocuments(e)}>Edit</button>
                    </div>
                </div>

                <div className='terms-condition'>
                    <label class="container">
                        <input type="checkbox" id="termsNcondition"/>
                        <span class="checkmark"></span>
                        I agree to the <span style={{fontWeight:"800"}}>Terms & Conditions</span>
                    </label>
                </div>
                
                <Buttons nextScreen={nextScreen} style={{marginTop:"10px", width:"90%"}}></Buttons>
            </div>
        </div>
    )
}

export default ConfirmDetails