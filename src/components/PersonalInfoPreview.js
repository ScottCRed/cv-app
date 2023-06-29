import React from "react";

function PersonalInfoPreview(props) {
    const {personalInfo} = props;
    let dob = new Date(personalInfo.birthDate);
    let monthDiff = Date.now() - dob;
    let dateDiff = new Date(monthDiff);
    let year = dateDiff.getUTCFullYear();
    let age = Math.abs(year-1970);
    return (
        <div>
            <p>First Name: {personalInfo.firstName}</p>
            <p>Surname: {personalInfo.surname}</p>
            <p>Title: {personalInfo.title}</p>
            <p>Address: {personalInfo.address}</p>
            <p>Phone Number: {personalInfo.phoneNo}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Date of Birth: {personalInfo.birthDate}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default PersonalInfoPreview;