import Input from './Input.js';

const Personal = (props) => {
    const { setInfo, personalInfo } = props;
    
      function handleInfoChange (e) {
        const { id, value} = e.target;
        setInfo((prevInfo) => ({
            ...prevInfo,
            [id] : value
        }));
      }
      
    return (
        <div>
          <h3>Personal Information</h3>
            <Input type='text' id='firstName' placeholder='First Name' onInfoChange={handleInfoChange} value={personalInfo.firstName}/>
            <Input type='text' id='surname' placeholder='Surname' onInfoChange={handleInfoChange} value = {personalInfo.surname}/>
            <Input type='text' id='title' placeholder='Title' onInfoChange={handleInfoChange} value = {personalInfo.title}/>
            <Input type='text' id='age' placeholder='Age' onInfoChange={handleInfoChange} value = {personalInfo.age}/>
            <Input type='text' id='address' placeholder='Address' onInfoChange={handleInfoChange} value = {personalInfo.address}/>
            <Input type='text' id='phoneNo' placeholder='Phone Number' onInfoChange={handleInfoChange} value = {personalInfo.phoneNo}/>
            <Input type='text' id='email' placeholder='Email Address' onInfoChange={handleInfoChange} value = {personalInfo.email}/>
            <Input type='text' id='notes' placeholder='Notes About Me' onInfoChange={handleInfoChange} value = {personalInfo.notes}/>
        </div>

    )
}

export default Personal;