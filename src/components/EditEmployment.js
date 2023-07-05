import React from "react";
import Button from "./Button";

function EditEmployment (props) {
    const {handleEdit, employment, setEmploymentInfo, employmentInfo, index} = props;

    function handleNewInput (e) {
        const {name, value} = e.target;
        const updatedEmploymentInfo = employmentInfo.map((item, i) =>(
            i===index ? {...item, [name]: value} : item
        ));
        setEmploymentInfo(updatedEmploymentInfo);
    };
    return (
        <div className="infoCard" key={index}>        
        <table className="previewTbl">
            <tbody>
            <tr>
                <td style={{'width': '35%'}}>Start Date: 
                <input type="date" name="startDate" id="editInput" value={employment.startDate} onChange={handleNewInput}/></td>
                <td>
                <input type="text" name="company" id="editInput" value={employment.companyName} onChange={handleNewInput}/>, 
                <input type="text" name="companyAddress" id="editInput" value={employment.companyAddress} onChange={handleNewInput}/></td>
            </tr>
            <tr>
                <td>Completed: 
                <input type="date" name="endDate" id="editInput" value={employment.endDate} onChange={handleNewInput}/></td>
                <td>Position: 
                <input type="text" name="position" id="editInput" value={employment.position} onChange={handleNewInput}/></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>
                <Button 
                buttonText="Update" 
                buttonClass="btnEdit" 
                onClick={handleEdit}/>
                </td>
                <td></td>
            </tr>
            </tbody>
        </table> 
      </div>
    )
}

export default EditEmployment;