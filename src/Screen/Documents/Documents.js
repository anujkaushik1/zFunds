import React, { useState } from 'react'
import Header from '../../Components/Header/Header';
import './Documents.css'
import CancelIcon from '@mui/icons-material/Cancel';
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

function Documents() {

    const [panDoc, setPanDoc] = useState(null);
    const [sigDoc, setSigDoc] = useState(null);
    const navigate = useNavigate();

    const nextScreen = () => {
        if(panDoc && sigDoc)
            navigate('/declaration')
        
        else{

            if(!panDoc) alert('Please submit PAN Card image')

            if(!sigDoc) alert('Please submit Signature image')


        }
        
    }

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
                            top : '7px',
                            right : '20px'
                        }} />
                        <div style={{
                            height: '70%',
                            width: '70%',
                            backgroundColor: '#CDD5DF'
                        }}>

                            <input onChange={(e) => uploadPanCard(e)} 
                                accept='image/*' type="file" className='input' />

                        </div>

                    </div>

                </div>

                <div style={{
                    height : '20px',
                    width : '100%',
                    display : 'flex',
                    justifyContent : 'center',
                    padding : 0,
                    margin : 0
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
                            marginLeft : '15px',
                            fontWeight: 700
                        }}>Signature</span>

                        <div style={{
                            maxWidth: '178px',
                            marginTop: '20px',
                            marginLeft : '15px',
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
                            top : '7px',
                            right : '20px'
                        }} />
                        <div style={{
                            height: '70%',
                            width: '70%',
                            backgroundColor: '#CDD5DF'
                        }}>
                            
                            <input onChange={(e) => uploadSignature(e)} 
                                accept='image/*' type="file" className='input' />

                        </div>

                    </div>

                </div>

            </div>
            
            <div style={{marginTop : '20px'}}></div>
            
            <Buttons nextScreen={nextScreen}></Buttons>

        </div>
    )
}

export default Documents