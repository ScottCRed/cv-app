import Education from "./Education";
import Employment from "./Employment";
import Personal from "./Personal";
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationInfoPreview  from "./EducationInfoPreview"
import EmploymentInfoPreview from "./EmploymentInfoPreview";
import { useState } from 'react';
import Button from "./Button";

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

    const [employment, setEmployment] = useState({
        companyName: '',
        position: '',
        companyAddress: '',
        startDate: '',
        endDate: '',
    });
    const [eduInfo, setEduInfo] = useState([]);
    const [employmentInfo, setEmploymentInfo] = useState([]);
    const [editState, setEditState] = useState(-1);

    const deleteEmployment = (e) => {      
        const employmentId = parseInt(e.target.id);
        const updatedEmploymentInfo = employmentInfo.filter((employment, index) => index !==employmentId);
        setEmploymentInfo(updatedEmploymentInfo);
      };

    const deleteEducation = (e) => {      
        const eduId = parseInt(e.target.id);
        const updatedEduInfo = eduInfo.filter((employment, index) => index !==eduId);
        setEduInfo(updatedEduInfo);
    };

    const onEduEdit = (e) => {
        const eduId = parseInt(e.target.id);
        console.log(eduId)
        setEditState(eduId);
    }

    const onEmploymentEdit = (e) => {
        const employmentId = parseInt(e.target.id);
        console.log(employmentId)
        setEditState(employmentId);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        setEditState(-1);
    }

    return (
        <div className="mainWrapper">
            <div className="formWrapper">
            <Personal personalInfo={personalInfo} setInfo={setInfo}/>
            <Education education={education} setEducation={setEducation} eduInfo={eduInfo} setEduInfo={setEduInfo}/>
            <Employment employment={employment} setEmployment={setEmployment} employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo}/>
            <Button onClick={()=> {console.log('hi')}} buttonText="Reset" buttonClass="btnReset" id="reset"/>
            </div>
            <div className="previewWrapper">
            <PersonalInfoPreview personalInfo={personalInfo}/>
            <EducationInfoPreview eduInfo={eduInfo} deleteClick={deleteEducation} onEdit={onEduEdit} handleEdit={handleEdit} editState={editState} setEduInfo={setEduInfo}/>
            <EmploymentInfoPreview employmentInfo={employmentInfo} deleteClick={deleteEmployment} onEdit={onEmploymentEdit} handleEdit={handleEdit} editState={editState} setEmploymentInfo={setEmploymentInfo}/>
            </div>
        </div>

    )
}

export default Main;