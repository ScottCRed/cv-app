import React, { useEffect } from "react";
import Button from "./Button";

function EmploymentInfoPreview (props) {
    const {employmentInfo} = props
    useEffect(() => {
        console.log(employmentInfo);
    }, [employmentInfo]);
    return (
        <div>
          {employmentInfo.map((item, index) => {
            return (
              <div key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>
                    {key} : {value}
                  </p>
                ))}
                <Button buttonText="Edit Institution" buttonClass="btnEdit" />
                <Button buttonText="Delete Institution" buttonClass="btnDelete" />
              </div>
            );
          })}
        </div>
      );
    }

export default EmploymentInfoPreview;