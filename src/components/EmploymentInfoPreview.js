import React, { useEffect } from "react";
import Button from "./Button";
import EditEmployment from "./EditEmployment";

function EmploymentInfoPreview (props) {
    const {employmentInfo, deleteClick, onEdit, handleEdit, editState, setEmploymentInfo } = props
    useEffect(() => {

    }, [employmentInfo]);

    return (
      <div className="preview">
      <h3>Employment</h3>
          {employmentInfo.map((item, index) => {
            return editState === index ?
            <EditEmployment  
            key="edit" 
            handleEdit={handleEdit} 
            employment={item} 
            index={index} 
            employmentInfo={employmentInfo} 
            setEmploymentInfo={setEmploymentInfo}/> :
            
              <div key={index} className="infoCard">
                <table className="previewTbl">
                  <tbody>
                    <tr>
                      <td style={{'width': '35%'}}><b>Start Date:</b> {item.startDate}</td>
                      <td>{item.companyName}, {item.companyAddress} </td>
                    </tr>
                    <tr>
                      <td><b>Completed:</b> {item.endDate}</td>
                      <td><b>Position:</b> {item.position}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
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
          })}
          <div className="line"/>
        </div>
      );
    }

export default EmploymentInfoPreview;