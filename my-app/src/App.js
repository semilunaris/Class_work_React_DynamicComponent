import './App.css';
import Counter from '../src/Сounter/Counter'; // Исправлено название компонента
import Dropdown from './Components/Dropdown'; // Убедитесь, что путь правильный
import ColorePicker from 'Components/ColorPicker/ColorPicker';


const App = () => {
  return (
    <div>
      <Counter initialValue={6} />
      <br/>
      <Dropdown />
         <br/>
       <ColorePicker options={[
  { label: 'Red', color: 'red' },
  { label: 'Green', color: 'green' },
  { label: 'Blue', color: 'blue' }
]} />    
    </div>
  
  );
}

export default App;