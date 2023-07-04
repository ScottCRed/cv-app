import Education from "./Education";
import Employment from "./Employment";
import Personal from "./Personal";
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationInfoPreview  from "./EducationInfoPreview"
import EmploymentInfoPreview from "./EmploymentInfoPreview";
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

    const deleteEmployment = (e) => {      
        const employmentId = parseInt(e.target.id);
        const updatedEmploymentInfo = employmentInfo.filter((employment, index) => index !==employmentId);
        setEmploymentInfo(updatedEmploymentInfo);
      };

    const deleteEducation = (e) => {      
        const eduId = parseInt(e.target.id);
        const updatedEduInfo = eduInfo.filter((employment, index) => index !==eduId);
        setEduInfo(updatedEduInfo);
    }

    return (
        <div className="mainWrapper">
            <div className="formWrapper">
            <Personal personalInfo={personalInfo} setInfo={setInfo}/>
            <Education education={education} setEducation={setEducation} eduInfo={eduInfo} setEduInfo={setEduInfo}/>
            <Employment employment={employment} setEmployment={setEmployment} employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo}/>
            </div>
            <div className="previewWrapper">
            <PersonalInfoPreview personalInfo={personalInfo}/>
            <EducationInfoPreview eduInfo={eduInfo} deleteClick={deleteEducation}/>
            <EmploymentInfoPreview employmentInfo={employmentInfo} deleteClick={deleteEmployment}/>
            </div>
        </div>

    )
}

export default Main;