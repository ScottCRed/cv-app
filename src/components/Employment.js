import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';
import InfoField from './EducationInfoPreview.js'

const Employment = (props) => {
    const {employment, setEmployment, employmentInfo, setEmploymentInfo} = props;
    
    const initialState ={
        companyName: '',
        position: '',
        companyAddress: '',
        startDate: '',
        endDate: '',
    }

    const initialStateArr = [];
    
    function handleEmploymentChange (e) {
    const { id, value} = e.target;
    setEmployment((prevInfo) => ({
        ...prevInfo,
        [id] : value
        }));
    }
    const onAddEmployment = (e) => {
        e.preventDefault();

        setEmploymentInfo(employmentInfo.concat(employment));
        setEmployment(initialState);
    }

    function Clear () {
        setEmploymentInfo(initialStateArr);
        setEmployment(initialState);
    }
    return (
        <div>
            <h2>Work Experience</h2>
            <Input type='text' id='companyName' placeholder='Name of Company' onInfoChange={handleEmploymentChange} value={employment.companyName}/>
            <Input type='text' id='position' placeholder='Name of Position Held' onInfoChange={handleEmploymentChange} value={employment.position}/>
            <Input type='text' id='companyAddress' placeholder='Company Address' onInfoChange={handleEmploymentChange} value={employment.companyAddress}/>
            <DateInput type='date' id='startDate' placeholder='Start Date' onDateChange={handleEmploymentChange} value={employment.startDate}/>
            <DateInput type='date' id='endDate' placeholder='Date of Departure' onDateChange={handleEmploymentChange} value={employment.endDate}/>
            <Button onClick={onAddEmployment} buttonText='Retrieve Info' buttonClass='addButton' id='1'/>
            <Button onClick={Clear} buttonText='Clear' buttonClass='clearButton' id='clear'/>
        </div>
    )
}

export default Employment;