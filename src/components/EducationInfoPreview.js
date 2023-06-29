import React, { useEffect } from "react";

function EducationInfoPreview (props) {
    const {eduInfo} = props
    useEffect(() => {
        console.log(eduInfo);
    }, [eduInfo]);
    return (
        <div>
            {eduInfo.map((item, index)=> {
                return Object.entries(item).map(([key, value]) => {
                    return (
                        <p key={index + key}>{key} : {value}</p>
                    )})
                }
            )}
        </div>
    )
}

export default EducationInfoPreview;