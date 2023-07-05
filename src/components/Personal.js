import Input from './Input.js';

const Personal = (props) => {
    const { setInfo } = props;
    
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
            <Input type='text' id='firstName' placeholder='First Name' onInfoChange={handleInfoChange}/>
            <Input type='text' id='surname' placeholder='Surname' onInfoChange={handleInfoChange}/>
            <Input type='text' id='title' placeholder='Title' onInfoChange={handleInfoChange}/>
            <Input type='text' id='age' placeholder='Age' onInfoChange={handleInfoChange}/>
            <Input type='text' id='address' placeholder='Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='phoneNo' placeholder='Phone Number' onInfoChange={handleInfoChange}/>
            <Input type='text' id='email' placeholder='Email Address' onInfoChange={handleInfoChange}/>
            <Input type='text' id='notes' placeholder='Notes About Me' onInfoChange={handleInfoChange}/>
        </div>

    )
}

export default Personal;