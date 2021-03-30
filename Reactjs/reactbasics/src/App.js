import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Clark' heroName='Superman'>
      <p> This is childern props</p>
      </Greet>
      <Greet name='Brown' heroName='Spiderman'>
        <button>Active</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman'/>
      <Welcome name='Heros' heroName='Saviour'/> */}
      <Message/>
    </div>
  );
}

export default App;
