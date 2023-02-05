import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import './Documents.css'
import CancelIcon from '@mui/icons-material/Cancel';
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Documents() {

    // State for storing image URLs for each document

    const [panDoc, setPanDoc] = useState(null);
    const [sigDoc, setSigDoc] = useState(null);
    const [passDoc, setPassDoc] = useState(null);


    const navigate = useNavigate();

    // hook for getting the data from personalDetailsReducer in the Redux store

    const personalDetailsReducer = useSelector(state => state.personalDetailsReducer);
    const { data } = personalDetailsReducer;

    // check if personal details data from previous screen exists, 
    // if not navigate to the personal details page

    useEffect(() => {
        if (Object.keys(data).length === 0) {
            navigate('/personal-details');
        }
    }, [panDoc, sigDoc, passDoc]);

    // navigate to the declaration page if all documents are uploaded, otherwise show error messages

    const nextScreen = () => {
        if (passDoc && panDoc && sigDoc)
            navigate('/declaration')
        else {
            if (!passDoc) alert('Please submit picture of yours')
            if (!panDoc) alert('Please submit PAN Card image')
            if (!sigDoc) alert('Please submit Signature image')
        }
    }

    // upload and store the profile photo document

    const uploadPictureDoc = (e) => {
        const file = e.target.files[0];
        if (checkFileSize(file)) {
            uploadFile(file, " picture");
        }
        setPassDoc(URL.createObjectURL(file));
    }

    // upload and store the signature document

    const uploadSignature = (e) => {
        const file = e.target.files[0];
        if (checkFileSize(file)) {
            uploadFile(file, "signature");
        }
        setSigDoc(URL.createObjectURL(file));
    }

    // upload and store the PAN card document

    const uploadPanCard = (e) => {
        const file = e.target.files[0];
        if (checkFileSize(file)) {
            uploadFile(file, "pan_card");
        }
        setPanDoc(URL.createObjectURL(file));
    }

    // check if the uploaded file size is greater than 2 MB
    function checkFileSize(file) {
        if (file.size / (1024 * 1024) > 2) {
            alert('File size is too large !')
            return false;
        }
        return true;
    }

    //  function to upload and store file in local storage 
    // date would be stored in format (data:image/png;base64,iVBORw0KG...)
    
    function uploadFile(file, name) {

        const reader = new FileReader();
        reader.onloadend = () => {
            localStorage.setItem(name, reader.result);
        }

        reader.readAsDataURL(file);

    }


    return (
        <div style={{ height: '100%', width: '100%' }}>

            <Header
                heading="Documents"
                desc="These documents are required to complete your KYC verification."
                label="Upload Documents" />

            <div style={{
                marginTop: '50px',
                marginLeft: '15px'
            }}>

                <div className='pancard' >

                    <div style={{
                        height: '112px',
                        width: 'fit-content',
                    }}>

                        <span style={{
                            fontSize: '16px',
                            color: '#052F5F',
                            fontWeight: 700
                        }}>Photo</span>

                        <div style={{
                            maxWidth: '140px',
                            marginTop: '20px'
                        }}>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '13px',
                                fontFamily: 'Noto Sans'
                            }}>Upload Passport Size Photo </span>
                        </div>

                    </div>

                    <div className='pancard_upload'>
                        <CancelIcon sx={{
                            color: '#01AA7B',
                            height: '15.5px',
                            width: '15.5px',
                            position: 'absolute',
                            top: '7px',
                            right: '20px'
                        }} />
                        <div style={{
                            height: '70%',
                            width: '70%',
                            backgroundColor: '#CDD5DF'
                        }}>

                            {
                                passDoc &&
                                <img className='image' src={passDoc} alt='Photo' />

                            }

                            <input onChange={(e) => uploadPictureDoc(e)}
                                accept='image/*' type="file" className='input' />

                        </div>

                    </div>

                </div>

                <div style={{
                    height: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0
                }}>

                    <div style={{
                        width: '65%',
                        height: '2px',
                        backgroundColor: '#CDCDCD',
                        padding: 0
                    }} />

                </div>

                <div className='pancard' >

                    <div style={{
                        height: '112px',
                        width: 'fit-content',
                    }}>

                        <span style={{
                            fontSize: '16px',
                            color: '#052F5F',
                            fontWeight: 700
                        }}>PAN Card</span>

                        <div style={{
                            maxWidth: '140px',
                            marginTop: '20px'
                        }}>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '13px',
                                fontFamily: 'Noto Sans'
                            }}>Click a picture of your
                                PAN Card and upload </span>
                        </div>

                    </div>

                    <div className='pancard_upload'>
                        <CancelIcon sx={{
                            color: '#01AA7B',
                            height: '15.5px',
                            width: '15.5px',
                            position: 'absolute',
                            top: '7px',
                            right: '20px'
                        }} />
                        <div style={{
                            height: '70%',
                            width: '70%',
                            backgroundColor: '#CDD5DF'
                        }}>

                            {
                                panDoc &&
                                <img className='image' src={panDoc} alt='Photo' />
                            }

                            <input onChange={(e) => uploadPanCard(e)}
                                accept='image/*' type="file" className='input' />

                        </div>

                    </div>

                </div>

                <div style={{
                    height: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 0,
                    margin: 0
                }}>

                    <div style={{
                        width: '65%',
                        height: '2px',
                        backgroundColor: '#CDCDCD',
                        padding: 0
                    }} />

                </div>

                <div className='pancard signature'>

                    <div style={{
                        height: '112px',
                        width: 'fit-content',
                    }}>

                        <span style={{
                            fontSize: '16px',
                            color: '#052F5F',
                            marginLeft: '15px',
                            fontWeight: 700
                        }}>Signature</span>

                        <div style={{
                            maxWidth: '178px',
                            marginTop: '20px',
                            marginLeft: '15px',
                        }}>

                            <span style={{
                                color: '#052F5F',
                                fontWeight: 510,
                                fontSize: '13px',
                                fontFamily: 'Noto Sans'
                            }}>Sign on a blank white paper
                                (same as in Bank records).
                                Click a picture & upload. </span>
                        </div>

                    </div>

                    <div className='pancard_upload signature_upload'>
                        <CancelIcon sx={{
                            color: '#01AA7B',
                            height: '15.5px',
                            width: '15.5px',
                            position: 'absolute',
                            top: '7px',
                            right: '20px'
                        }} />
                        <div style={{
                            height: '70%',
                            width: '70%',
                            backgroundColor: '#CDD5DF'
                        }}>

                            {
                                sigDoc &&
                                <img className='image' src={sigDoc} alt='Signature' />
                            }

                            <input onChange={(e) => uploadSignature(e)}
                                accept='image/*' type="file" className='input' />

                        </div>

                    </div>

                </div>

            </div>

            <div style={{ marginTop: '20px' }}></div>

            <Buttons nextScreen={nextScreen}></Buttons>

        </div>
    )
}

export default Documents