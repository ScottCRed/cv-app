import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';
import InfoField from './InfoField'

const Education = (props) => {
    const {education, setEducation, eduInfo, setEduInfo} = props;
    
    const onClickOne = (e) => {
        console.log(education);
      }
    
      function handleEduChange (e) {
        const { id, value} = e.target;
        setEducation((prevInfo) => ({
            ...prevInfo,
            [id] : value
        }));

        const onAddEdu = (e) => {
            e.preventDefault();

            setEduInfo()
        }
      }
    return (
        <div>
            <Input type='text' id='institution' placeholder='Name of Institution' onInfoChange={handleEduChange}/>
            <Input type='text' id='institutionAddress' placeholder='Address' onInfoChange={handleEduChange}/>
            <Input type='text' id='degree' placeholder='Name of Qualification' onInfoChange={handleEduChange}/>
            <Input type='text' id='majors' placeholder='Major/Specialization' onInfoChange={handleEduChange}/>
            <DateInput type='date' id='startDate' placeholder='Start Date' onDateChange={handleEduChange}/>
            <DateInput type='date' id='endDate' placeholder='Date of completion (current date if still in progress)' onDateChange={handleEduChange}/>
            <Button onClick={onClickOne} buttonText='Retrieve Info' buttonClass='addButton' id='1'/>
        </div>

    )
}

export default Education;