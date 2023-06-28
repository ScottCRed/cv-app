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
        institutionName: '',
        address: '',
        degree: '',
        majors: '',
        dateStart: '',
        dateEnd: '',
    });

    const [employment, setEmployment] = useState({
        companyName: '',
        position: '',
        address: '',
        dateStart: '',
        dateEnd: '',
    });

    return (
        <div>
        <Personal personalInfo={personalInfo} setInfo={setInfo}/>
        </div>
    )
}

export default Main;