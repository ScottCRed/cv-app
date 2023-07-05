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
        <table className="previewTbl">
          <tbody>
            <tr>
              <td style={{'width': '35%'}}>Start Date: 
              <input type="date" name="startDate" id="editInput" value={education.startDate} onChange={handleNewInput}/></td>
              <td>
                <input type="text" name="institution" id="editInput" value={education.institution} onChange={handleNewInput}/>, 
                <input type="text" name="institutionAddress" id="editInput" value={education.institutionAddress} onChange={handleNewInput}/></td>
            </tr>
            <tr>
              <td>Completed: 
                <input type="date" name="endDate" id="editInput" value={education.endDate} onChange={handleNewInput}/></td>
              <td>Degree: 
                <input type="text" name="degree" id="editInput" value={education.degree} onChange={handleNewInput}/></td>
            </tr>
            <tr>
              <td></td>
              <td>Majors: 
                <input type="text" name="majors" id="editInput" value={education.majors} onChange={handleNewInput}/></td>
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

export default EditEducation;