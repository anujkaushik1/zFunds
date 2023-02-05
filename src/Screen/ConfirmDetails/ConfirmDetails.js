import './ConfirmDetails.css'
import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import EditIcon from '@mui/icons-material/Edit';
import Buttons from '../../Components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePersonalDetails } from '../../Redux/actions/personalDetailsActions';
import { deleteDeclarationDetails } from '../../Redux/actions/declarationDetailsActions';
import axiosClient from '../../network/client';

const ConfirmDetails = () => {

    //hook to  store the base64 data coming from storage

    const [panDoc, setPanDoc] = useState(null);
    const [sigDoc, setSigDoc] = useState(null);
    const [passDoc, setPassDoc] = useState(null);

    // retrieves the personal details and declaration details data from the store

    const personalDetailsReducer = useSelector(state => state.personalDetailsReducer);
    const declarationDetailsReducer = useSelector(state => state.declarationDetailsReducer);

    // dispatches actions to delete data from store
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {

        const { data } = personalDetailsReducer;


        if (Object.keys(data).length === 0) {
            navigate('/personal-details');
        }

        // retrieves the PAN, signature, and profile images from local storage

        const panImageData = localStorage.getItem('pan_card');
        const sigImageData = localStorage.getItem('signature');
        const passImageData = localStorage.getItem('picture');


        setPanDoc(panImageData);
        setSigDoc(sigImageData);
        setPassDoc(passImageData);


    }, [])

    const nextScreen = (e) => {
        
        // gets the checkbox element

        const cb = window.document.querySelector('#termsNcondition');
        if(cb.checked){

            // if checkbox clicked call functions
            
            submitData();

            alert('Data Submitted Successfully');

            deleteData();
            navigate('/personal-details');
        }else{
            alert('Please read Terms and conditions to continue.')
        }
    }

    // function to convert base64 image to Blob object

    const convertImageToBlob = (data) => {
        const parts = data.split(";base64,");
        const contentType = parts[0].split(":")[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);
      
        for (let i = 0; i < rawLength; i++) {
          uInt8Array[i] = raw.charCodeAt(i);
        }
      
        return new Blob([uInt8Array], { type: contentType });
    }

    const submitData = async() => {

        const {email, father_name, mother_name, martial_status, annual_income} = 
            personalDetailsReducer.data;

        console.log(email, father_name, mother_name, martial_status, annual_income);
        try {
            
            const formData = new FormData();

            // Append the personal details to the formData object

            formData.append('email', email);
            formData.append('father_name', father_name);
            formData.append('mother_name', mother_name);
            formData.append('martial_status', martial_status);
            formData.append('annual_income', annual_income);            
            
            // Get the blob data from the documents - passDoc, sigDoc and panDoc

            const passBlob = convertImageToBlob(passDoc);
            const sigBlob = convertImageToBlob(sigDoc);
            const panBlob = convertImageToBlob(panDoc);

            // Append the document data to the formData object with file names - profile.jpeg, signature.jpeg, pancard.jpeg

            formData.append('files', passBlob, "profile.jpeg");
            formData.append('files', sigBlob, "signature.jpeg");
            formData.append('files', panBlob, "pancard.jpeg");

            // Set the header content type to 'multipart/form-data' to send files in body

            axiosClient.defaults.headers = 'multipart/form-data';

            // Make a post request to the '/submit_details' endpoint with the formData object
            
            await axiosClient.post('/submit_details', formData);


        } catch (error) {
            console.log(error);
        }

    }

    const deleteData = () => {

        // Dispatch the deletePersonalDetails and deleteDeclarationDetails actions

        dispatch(deletePersonalDetails());
        dispatch(deleteDeclarationDetails());

        // Remove the saved data from local storage

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

        // Navigate to the '/declaration' page and pass the current state of declarationDetailsReducer as state

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
                        I agree to the &nbsp;<span style={{fontWeight:"800"}}>Terms & Conditions</span>
                    </label>
                </div>
                
                <Buttons nextScreen={nextScreen} style={{marginTop:"10px", width:"90%"}}></Buttons>
            </div>
        </div>
    )
}

export default ConfirmDetails