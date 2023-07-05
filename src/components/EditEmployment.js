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
        <p key={"position"}>Position Held: <input type="text" name="position" value={employment.position} onChange={handleNewInput}/></p> 
        <p key={"companyName"}>Name of Company: <input type="text" name="companyName" value={employment.companyName} onChange={handleNewInput}/></p> 
        <p key={"companyAddress"}>Address of Company: <input type="text" name="companyAddress" value={employment.companyAddress} onChange={handleNewInput}/></p> 
        <p key={"start"}>Start Date: <input type="date" name="startDate" value={employment.startDate} onChange={handleNewInput}/></p> 
        <p key={"end"}>End Date: <input type="date" name="endDate" value={employment.endDate} onChange={handleNewInput}/></p> 
        
        <Button buttonText="Update Employment" buttonClass="btnEdit" onClick={handleEdit}/>
      </div>
    )
}

export default EditEmployment;