import Education from "./Education";
import Employment from "./Employment";
import Personal from "./Personal";
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
    const [eduInfo, setEduInfo] = ([]);

    const [employment, setEmployment] = useState({
        companyName: '',
        position: '',
        address: '',
        dateStart: '',
        dateEnd: '',
    });
    const [employInfo, setEmployInfo] = ([]);

    return (
        <div>
        <Personal personalInfo={personalInfo} setInfo={setInfo}/>
        <Education education={education} setEducation={setEducation} setEduInfo={setEduInfo}/>
        <Employment employment={employment} setEducation={setEmployment} setEmployInfo={setEmployInfo}/>
        </div>
    )
}

export default Main;