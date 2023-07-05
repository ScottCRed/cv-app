import React from "react";

function PersonalInfoPreview(props) {
    const {personalInfo} = props;

    return (
        <div className="personalInfoWrapper">          
            <table className="personalTbl">
                <thead><h3>Personal Information</h3></thead>
                <tbody>
                <tr>
                    <td style={{'width': '30%'}}><b>First Name </b></td>
                    <td>{personalInfo.firstName}</td>
                </tr>
                <tr>
                    <td><b>Surname </b></td>
                    <td>{personalInfo.surname}</td>
                </tr>
                <tr>
                    <td><b>Title </b> </td>
                    <td>{personalInfo.title}</td>
                </tr>
                <tr>
                    <td><b>Age </b> </td>
                    <td>{personalInfo.age}</td>
                </tr>
                <tr>
                    <td><b>Address </b></td>
                    <td>{personalInfo.address}</td>
                </tr>
                <tr>
                    <td><b>Phone Number </b></td>
                    <td>{personalInfo.phoneNo}</td>
                </tr>
                <tr>
                    <td><b>Email </b></td>
                    <td>{personalInfo.email}</td>
                </tr>
                </tbody>                
            </table>
            <div className="break"></div>
        </div>
    )
}

export default PersonalInfoPreview;