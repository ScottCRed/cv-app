import React, { useEffect } from "react";
import Button from "./Button";

function EducationInfoPreview (props) {
    const {eduInfo, deleteClick} = props
    useEffect(() => {

    }, [eduInfo]);
    return (
        <div>
          {eduInfo.map((item, index,) => {
            return (
              <div key={index}>                
                <p key={"institution"}>Name of Institution: {item.institution}</p>
                <p key={"address"}>Address of Institution: {item.institutionAddress}</p>
                <p key={"degree"}>Name of Degree: {item.degree}</p>
                <p key={"majors"}>Major(s): {item.majors}</p>
                <p key={"start"}>Start Date: {item.startDate}</p>
                <p key={"end"}>End Date: {item.endDate}</p>
                
                <Button buttonText="Edit Institution" buttonClass="btnEdit" />
                <Button buttonText="Delete Institution" buttonClass="btnDelete" onClick={deleteClick} id={index} />
              </div>
            );
          })}
        </div>
      );
    }

export default EducationInfoPreview;