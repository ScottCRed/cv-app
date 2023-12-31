import React, { useEffect } from "react";
import Button from "./Button";
import EditEducation from "./EditEducation";

function EducationInfoPreview (props) {
    const {eduInfo, deleteClick, editState, onEdit, handleEdit, setEduInfo} = props
    useEffect(() => {

    }, [eduInfo]);
    return (
        <div className="preview">
          <h3>Education</h3>
          {eduInfo.map((item, index) => {
            return editState === index ?
            <EditEducation 
            key="edit" 
            handleEdit={handleEdit} 
            education={item} 
            index={index} 
            eduInfo={eduInfo} 
            setEduInfo={setEduInfo}/> :
            
              <div key={index} className="infoCard"> 
                <table className="previewTbl">
                  <tbody>
                    <tr>
                      <td style={{'width': '35%'}}><b>Start Date:</b>  {item.startDate}</td>
                      <td>{item.institution}, {item.institutionAddress} </td>
                    </tr>
                    <tr>
                      <td><b>Completed:</b>  {item.endDate}</td>
                      <td><b>Degree:</b>  {item.degree}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td><b>Majors</b>  {item.majors} </td>
                    </tr>
                    <tr>
                      <td>
                        <Button 
                        id={index} 
                        buttonText="Edit" 
                        buttonClass="btnEdit" 
                        onClick={onEdit}/>
                        <Button 
                        id={index} 
                        buttonText="Delete" 
                        buttonClass="btnDelete" 
                        onClick={deleteClick} />
                        </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>           
              </div>
          })};
          <div className="line"/>
        </div>
      );
    }

export default EducationInfoPreview;