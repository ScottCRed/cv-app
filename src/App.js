import './App.css';
import Input from './components/Input.js';
import Button from './components/Button';

function App() {

  const onClickOne = () => {
    console.log('Add a thing bebe');
  }

  
  const onClickTwo = (e) => {
    console.log(e.target.id);
  }
  return (
    <div>
      <Input type='text' id='firstName' placeholder='First Name' />
      <Button onClick={onClickOne} buttonText='Add' buttonClass='addButton' id='1'/>
      <Button onClick={onClickTwo} buttonText='UwU' buttonClass='oooButton' id='2'/>
    </div>

  );
}

export default App;
