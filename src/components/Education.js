import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';

const Education = (props) => {
    const {education, setEducation, eduInfo, setEduInfo} = props;

    const initialState ={
        institution: '',
        institutionAddress: '',
        degree: '',
        majors: '',
        startDate: '',
        endDate: '',
    }

    const initialStateArr = [];
    
    function handleEduChange (e) {
    const { id, value} = e.target;
    setEducation((prevInfo) => ({
        ...prevInfo,
        [id] : value
        }));
    }
    const onAddEdu = (e) => {
        e.preventDefault();

        setEduInfo(eduInfo.concat(education));
        setEducation(initialState);
    }

    function Clear () {
        setEduInfo(initialStateArr);
        setEducation(initialState);
    }
    return (
        <div>
            <h3>Education</h3>
            <Input type='text' id='institution' placeholder='Name of Institution' onInfoChange={handleEduChange} value={education.institution}/>
            <Input type='text' id='institutionAddress' placeholder='Address' onInfoChange={handleEduChange} value={education.institutionAddress}/>
            <Input type='text' id='degree' placeholder='Name of Qualification' onInfoChange={handleEduChange} value={education.degree}/>
            <Input type='text' id='majors' placeholder='Major/Specialization' onInfoChange={handleEduChange} value={education.majors}/>
            <DateInput type='date' id='startDate' placeholder='Start Date' onDateChange={handleEduChange} value={education.startDate}/>
            <DateInput type='date' id='endDate' placeholder='Date of completion (current date if still in progress)' onDateChange={handleEduChange} value={education.endDate}/>
            <Button onClick={onAddEdu} buttonText='Add' buttonClass='btnAdd' id='1'/>
        </div>

    )
}

export default Education;