import React, { useEffect } from "react";
import Button from "./Button";

function EmploymentInfoPreview (props) {
    const {employmentInfo} = props
    useEffect(() => {

    }, [employmentInfo]);
    return (
        <div>
          {employmentInfo.map((item, index) => {
            return (
              <div key={index}>
                <p key={"institution"}>Name of Company: {item.companyName}</p>
                <p key={"address"}>Address of Company: {item.companyAddress}</p>
                <p key={"degree"}>Name of Position Held: {item.position}</p>
                <p key={"start"}>Start Date: {item.startDate}</p>
                <p key={"end"}>End Date: {item.endDate}</p>

                <Button buttonText="Edit Institution" buttonClass="btnEdit" />
                <Button buttonText="Delete Institution" buttonClass="btnDelete" />
              </div>
            );
          })}
        </div>
      );
    }

export default EmploymentInfoPreview;