import Education from "./Education";
import Employment from "./Employment";
import Personal from "./Personal";
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationInfoPreview  from "./EducationInfoPreview"
import { useState } from 'react';

function Main () {
    const [personalInfo, setInfo] = useState({
        firstName: '',
        surname: '',
        title: '',
        address: '',
        phoneNo: '',
        email: '',
        date: '',
    });

    const [education, setEducation] = useState({
        institution: '',
        institutionAddress: '',
        degree: '',
        majors: '',
        startDate: '',
        endDate: '',
    });
    const [eduInfo, setEduInfo] = useState([]);

    const [employment, setEmployment] = useState({
        companyName: '',
        position: '',
        companyAddress: '',
        startDate: '',
        endDate: '',
    });
    const [employmentInfo, setEmploymentInfo] = useState([]);

    return (
        <div>
            <div className="formWrapper">
            <Personal personalInfo={personalInfo} setInfo={setInfo}/>
            <Education education={education} setEducation={setEducation} eduInfo={eduInfo} setEduInfo={setEduInfo}/>
            <Employment employment={employment} setEmployment={setEmployment} employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo}/>
            </div>
            <div className="previewWrapper">
            <PersonalInfoPreview personalInfo={personalInfo}/>
            <EducationInfoPreview eduInfo={eduInfo}/>
            </div>
        </div>

    )
}

export default Main;