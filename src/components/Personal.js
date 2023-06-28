import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';
import InfoField from './InfoField'
import { useState } from 'react';

function Personal () {
    const [personalInfo, setInfo] = useState({
        firstName: '',
        surname: '',
        title: '',
        address: '',
        phoneNo: '',
        email: '',
        date: '',
    })
    const onClickOne = (e) => {
        console.log(personalInfo);
        
      }
    
      function handleInfoChange (e) {
        const { id, value} = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [id] : value
        }));
      }
      
      const onClickTwo = (e) => {
        console.log(e.target.id);
      }
    return (
        <div>
            <Input type='text' id='firstName' placeholder='First Name' onInfoChange={handleInfoChange}/>
            <Input type='text' id='surname' placeholder='Surname' onInfoChange={handleInfoChange}/>
            <Input type='text' id='title' placeholder='Title' onInfoChange={handleInfoChange}/>
            <Input type='text' id='address' placeholder='Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='phoneNo' placeholder='Phone Number' onInfoChange={handleInfoChange}/>
            <Input type='text' id='email' placeholder='Email Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='notes' placeholder='Other Notes' onInfoChange={handleInfoChange}/>
            <DateInput type='date' id='date' placeholder='First date' onDateChange={handleInfoChange}/>
            <Button onClick={onClickOne} buttonText='Retrieve Info' buttonClass='addButton' id='1'/>
            <InfoField personalInfo={personalInfo}/>
        </div>

    )
}

export default Personal;