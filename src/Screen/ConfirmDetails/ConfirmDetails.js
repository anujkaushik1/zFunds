import './ConfirmDetails.css'
import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ConfirmDetails = () => {

    const [panDoc, setPanDoc] = useState(null);
    const [sigDoc, setSigDoc] = useState(null);

    const personalDetailsReducer = useSelector(state => state.personalDetailsReducer);
    const declarationDetailsReducer = useSelector(state => state.declarationDetailsReducer);

    const uploadSignature = (e) => {
        const file = e.target.files[0];

        if(checkFileSize(file)){
            uploadFile(file, "signature");
        }

        setSigDoc(file);
    }

    const uploadPanCard = (e) => {
        const file = e.target.files[0];

        if(checkFileSize(file)){
            uploadFile(file, "pan_card");

        }
        setPanDoc(e.target.files[0]);
    }

    function checkFileSize(file){
        if (file.size / (1024 * 1024) > 2) {   // file size greater than 2 mb
            alert('File size is too large !')
            return false;
        }
        return true;
    }

    function uploadFile(file, name){
        const reader =  new FileReader();
        reader.onloadend = () => {
            localStorage.setItem(name, reader.result);
        }

        reader.readAsDataURL(file);
    }
    const navigate = useNavigate();
    const nextScreen = (e) => {
        
        navigate('/')
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
                        <button>Edit</button>
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
                        <button>Edit</button>
                    </div>
                </div>
                <div className='confirm-block'>
                    <h2>Documents</h2>
                    <div className='row-container' style={{width:"100%"}}>
                        <div className='col-container'>
                            <h1>Photo</h1>
                            <div className='pancard_upload'>
                                <CancelIcon sx={{
                                    color: '#01AA7B',
                                    height: '15.5px',
                                    width: '15.5px',
                                    position: 'absolute',
                                    top : '7px',
                                    right : '20px'
                                }} />
                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    <input onChange={(e) => uploadPanCard(e)} accept='image/*' type="file" className='input' />
                                </div>

                            </div>
                        </div>
                        <div className='col-container'>
                            <h1>PAN Card</h1>
                            <div className='pancard_upload'>
                                <CancelIcon sx={{
                                    color: '#01AA7B',
                                    height: '15.5px',
                                    width: '15.5px',
                                    position: 'absolute',
                                    top : '7px',
                                    right : '20px'
                                }} />
                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    <input onChange={(e) => uploadPanCard(e)} accept='image/*' type="file" className='input' />
                                </div>

                            </div>
                        </div>
                        <div className='col-container'>
                            <h1>Signature</h1>
                            <div className='pancard_upload'>
                                <CancelIcon sx={{
                                    color: '#01AA7B',
                                    height: '15.5px',
                                    width: '15.5px',
                                    position: 'absolute',
                                    top : '7px',
                                    right : '20px'
                                }} />
                                <div style={{
                                    height: '70%',
                                    width: '70%',
                                    backgroundColor: '#CDD5DF'
                                }}>
                                    <input onChange={(e) => uploadPanCard(e)} accept='image/*' type="file" className='input' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='edit-btn-container'>
                        <EditIcon />
                        <button>Edit</button>
                    </div>
                </div>
            </div>
            <Buttons nextScreen={nextScreen}></Buttons>
        </div>
    )
}

export default ConfirmDetails