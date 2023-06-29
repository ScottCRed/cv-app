import React from "react";

function EducationInfoPreview (props) {
    const {eduInfo} = props
    return (
        <div>
            {Object.entries(eduInfo).map(([key, value]) => {
                return value != '' ?
                <p key={key}>{value}</p> :
                <p key={key}>:)</p>
            })}
        </div>
    )
}

export default EducationInfoPreview;