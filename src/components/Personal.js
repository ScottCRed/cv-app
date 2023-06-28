import Input from './Input.js';
import Button from './Button';
import DateInput from './DateInput';

function Personal () {
    
    const onClickOne = (e) => {
        console.log('Add a thing bebe');
        
      }
    
      
      const onClickTwo = (e) => {
        console.log(e.target.id);
      }
    return (
        <div>
            <Input type='text' id='firstName' placeholder='First Name' />
            <Input type='text' id='surname' placeholder='Surname' />
            <Input type='text' id='title' placeholder='Title' />
            <Input type='text' id='address' placeholder='Address' />
            <Input type='text' id='phoneNo' placeholder='Phone Number' />
            <Input type='text' id='email' placeholder='Email Address' />
            <Input type='text' id='notes' placeholder='Other Notes' />
            <DateInput type='date' id='firstDate' placeholder='First date'/>
            <Button onClick={onClickOne} buttonText='Retrieve Info' buttonClass='addButton' id='1'/>
        </div>

    )
}

export default Personal;