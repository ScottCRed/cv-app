import React from "react";

function InfoField (props) {
    const {personalInfo} = props
    return (
        <div>
            {Object.entries(personalInfo).map(([key, value]) => {
                return value != '' ?
                <p key={key}>{value}</p> :
                <p key={key}>:)</p>
            })}
        </div>
    )
}

export default InfoField;