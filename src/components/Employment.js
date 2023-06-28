import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';
import InfoField from './InfoField'

const Employment = (props) => {
    const {employment, setEmployment} = props;
    
    const onClickOne = (e) => {
        console.log(employment);
      }
    
      function handleEduChange (e) {
        const { id, value} = e.target;
        setEmployment((prevInfo) => ({
            ...prevInfo,
            [id] : value
        }));
      }
    return (
        <div>
            {/* <Input type='text' id='firstName' placeholder='First Name' onInfoChange={handleInfoChange}/>
            <Input type='text' id='surname' placeholder='Surname' onInfoChange={handleInfoChange}/>
            <Input type='text' id='title' placeholder='Title' onInfoChange={handleInfoChange}/>
            <Input type='text' id='address' placeholder='Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='phoneNo' placeholder='Phone Number' onInfoChange={handleInfoChange}/>
            <Input type='text' id='email' placeholder='Email Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='notes' placeholder='Other Notes' onInfoChange={handleInfoChange}/>
            <DateInput type='date' id='date' placeholder='First date' onDateChange={handleInfoChange}/>
            <Button onClick={onClickOne} buttonText='Retrieve Info' buttonClass='addButton' id='1'/>
            <InfoField personalInfo={personalInfo}/> */}
        </div>

    )
}

export default Employment;