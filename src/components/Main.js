import Education from "./Education";
import Employment from "./Employment";
import Personal from "./Personal";
import PersonalInfoPreview from "./PersonalInfoPreview"
import EducationInfoPreview  from "./EducationInfoPreview"
import EmploymentInfoPreview from "./EmploymentInfoPreview";
import { useState } from 'react';
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer";

function Main () {
    const initialInfo = {
        firstName: '',
        surname: '',
        title: '',
        address: '',
        phoneNo: '',
        email: '',
        age: '',
    };
    const initialEdu = {
        institution: '',
        institutionAddress: '',
        degree: '',
        majors: '',
        startDate: '',
        endDate: '',
    };
    const initialEmployment = {
        companyName: '',
        position: '',
        companyAddress: '',
        startDate: '',
        endDate: '',
    };
    const [personalInfo, setInfo] = useState(initialInfo);
    const [education, setEducation] = useState(initialEdu);
    const [employment, setEmployment] = useState(initialEmployment);
    const [eduInfo, setEduInfo] = useState([]);
    const [employmentInfo, setEmploymentInfo] = useState([]);
    const [editEduState, setEditEduState] = useState(-1);
    const [editEmployState, setEditEmployState] = useState(-1);

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
        setEditEduState(eduId);
    }

    const onEmploymentEdit = (e) => {
        const employmentId = parseInt(e.target.id);
        setEditEmployState(employmentId);
    };

    const handleEduEdit = (e) => {
        e.preventDefault();
        setEditEduState(-1);
    };

    const handleEmployEdit = (e) => {
        e.preventDefault();
        setEditEmployState(-1);
    };

    function reset () {
        setInfo(initialInfo);
        setEducation(initialEdu);
        setEmployment(initialEmployment);
        setEduInfo([]);
        setEmploymentInfo([]);
        setEditEduState(-1);
        setEditEmployState(-1);
    }

    return (
        <div>
        <Header className="main" id="header" title="CV Creator"/>
        <div className="mainWrapper">
            <div className="formWrapper">
            <Personal personalInfo={personalInfo} setInfo={setInfo} />

            <Education 
            education={education} 
            setEducation={setEducation} 
            eduInfo={eduInfo} 
            setEduInfo={setEduInfo}/>

            <Employment 
            employment={employment} 
            setEmployment={setEmployment} 
            employmentInfo={employmentInfo} 
            setEmploymentInfo={setEmploymentInfo}/>
            
            <Button 
            onClick={reset} 
            buttonText="Reset" 
            buttonClass="btnReset" 
            id="reset"/>

            </div>
            <div className="previewWrapper">
            <Header className="secondary" id="header" title="Cirriculum Vitae"/>
            <PersonalInfoPreview personalInfo={personalInfo}/>

            <EducationInfoPreview 
            eduInfo={eduInfo} 
            deleteClick={deleteEducation} 
            onEdit={onEduEdit} 
            handleEdit={handleEduEdit} 
            editState={editEduState} 
            setEduInfo={setEduInfo}/>

            <EmploymentInfoPreview 
            employmentInfo={employmentInfo} 
            deleteClick={deleteEmployment} 
            onEdit={onEmploymentEdit} 
            handleEdit={handleEmployEdit} 
            editState={editEmployState} s
            etEmploymentInfo={setEmploymentInfo}/>
            </div>
        </div>
        <Footer className="footer" content="Created by Scott Carroll 2023"/>
        </div>

    )
}

export default Main;