import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FindImg from '@/assets/search_img.png'

import './FindDoctorSearch.css';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

function FindDoctorSearch() {

    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }

    return (<div className='finddoctor'>
        <center>
            <div>
                <img src={FindImg} alt="find doctor pic."/>
            </div>
            <div className="home-search-container"
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="doctor-search-box">
                    <input type="text" className="search-doctor-input-box"
                           placeholder="Search doctors, clinics, hospitals, etc."
                           onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)}
                           value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)}/>

                    <div className="findiconimg">
                        <i className="fa fa-search findIcon"></i>
                    </div>
                    <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                        {
                            specialities.map(speciality => <div className="search-doctor-result-item" key={speciality}
                                                                onMouseDown={() => handleDoctorSelect(speciality)}>
                                <span>
                                    <i className="fa fa-search" style={{height: "10px", width: "10px"}}></i>
                                </span>
                                <span>{speciality}</span>
                                <span>SPECIALITY</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </center>
    </div>)
}

export default FindDoctorSearch;
