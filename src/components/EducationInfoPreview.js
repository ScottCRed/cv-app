import React, { useEffect } from "react";
import Button from "./Button";
import EditEducation from "./EditEducation";

function EducationInfoPreview (props) {
    const {eduInfo, deleteClick, editState, onEdit, handleEdit, setEduInfo} = props
    useEffect(() => {

    }, [eduInfo]);
    return (
        <div>
          {eduInfo.map((item, index) => {
            return editState === index ?
            <EditEducation key="edit" handleEdit={handleEdit} education={item} index={index} eduInfo={eduInfo} setEduInfo={setEduInfo}/> :
              <div key={index} className="infoCard">     
                <p key={"institution"}>Name of Institution: {item.institution}</p>
                <p key={"address"}>Address of Institution: {item.institutionAddress}</p>
                <p key={"degree"}>Name of Degree: {item.degree}</p>
                <p key={"majors"}>Major(s): {item.majors}</p>
                <p key={"start"}>Start Date: {item.startDate}</p>
                <p key={"end"}>End Date: {item.endDate}</p>
                
              <Button id={index} buttonText="Edit Institution" buttonClass="btnEdit" onClick={onEdit}/>
              <Button id={index} buttonText="Delete Institution" buttonClass="btnDelete" onClick={deleteClick} />
              </div>
            
          })}
        </div>
      );
    }

export default EducationInfoPreview;