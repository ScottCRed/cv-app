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
    })

    return (
        <div>
        <Personal personalInfo={personalInfo} setInfo={setInfo}/>
        </div>
    )
}

export default Main;