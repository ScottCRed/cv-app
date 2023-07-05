import React, { useEffect } from "react";
import Button from "./Button";
import EditEmployment from "./EditEmployment";

function EmploymentInfoPreview (props) {
    const {employmentInfo, deleteClick, onEdit, handleEdit, editState, setEmploymentInfo } = props
    useEffect(() => {

    }, [employmentInfo]);

    return (
        <div>
          {employmentInfo.map((item, index) => {
            return editState === index ?
            <EditEmployment  key="edit" handleEdit={handleEdit} employment={item} index={index} employmentInfo={employmentInfo} setEmploymentInfo={setEmploymentInfo}/> :
              <div key={index} className="infoCard">
                <p key={"position"}>Name of Position Held: {item.position}</p>
                <p key={"companyName"}>Name of Company: {item.companyName}</p>
                <p key={"companyAddress"}>Address of Company: {item.companyAddress}</p>
                <p key={"start"}>Start Date: {item.startDate}</p>
                <p key={"end"}>End Date: {item.endDate}</p>

                <Button id={index} buttonText="Edit Institution" buttonClass="btnEdit" onClick={onEdit}/>
                <Button id={index} buttonText="Delete Institution" buttonClass="btnDelete" onClick={deleteClick} />
              </div>
          })}
        </div>
      );
    }

export default EmploymentInfoPreview;