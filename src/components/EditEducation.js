import React from "react";
import Button from "./Button";

function EditEducation (props) {
    const {handleEdit, education, setEduInfo, eduInfo, index} = props;

    function handleNewInput (e) {
        const {name, value} = e.target;
        const updatedEduInfo = eduInfo.map((item, i) =>(
            i===index ? {...item, [name]: value} : item
        ));
        setEduInfo(updatedEduInfo);
    };
    return (
        <div className="infoCard" key={index}>
        <p key={"institution"}>Name of Institution: <input type="text" name="institution" value={education.institution} onChange={handleNewInput}/></p> 
        <p key={"address"}>Address of Institution: <input type="text" name="institutionAddress" value={education.institutionAddress} onChange={handleNewInput}/></p> 
        <p key={"degree"}>Name of Degree: <input type="text" name="degree" value={education.degree} onChange={handleNewInput}/></p> 
        <p key={"majors"}>Major(s): <input type="text" name="majors" value={education.majors} onChange={handleNewInput}/></p> 
        <p key={"start"}>Start Date: <input type="date" name="startDate" value={education.startDate} onChange={handleNewInput}/></p> 
        <p key={"end"}>End Date: <input type="date" name="endDate" value={education.endDate} onChange={handleNewInput}/></p> 
        
        <Button buttonText="Update Institution" buttonClass="btnEdit" onClick={handleEdit}/>
      </div>
    )
}

export default EditEducation;