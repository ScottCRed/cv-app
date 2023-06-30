import React, { useEffect } from "react";
import Button from "./Button";

function EducationInfoPreview (props) {
    const {eduInfo} = props
    useEffect(() => {
        console.log(eduInfo);
    }, [eduInfo]);
    return (
        <div>
          {eduInfo.map((item, index) => {
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

export default EducationInfoPreview;