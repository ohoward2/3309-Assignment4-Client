
import './App.css';
import { F1Page, F2Page, F3Page, F4Page, F5Page } from './screens';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <h1>KLOAP Scouting Database</h1>
      <header className="App-header">
          <nav>
          <button onClick={()=> {ReactDOM.render(<F1Page/>, document.getElementById('screen'))}}>Find Players From A City</button>
          <span>       </span>
          <button onClick={()=> {ReactDOM.render(<F2Page/>, document.getElementById('screen'))}}>Find Elite Positional Players</button>
          <span>       </span>
          <button onClick={()=> {ReactDOM.render(<F3Page/>, document.getElementById('screen'))}}>Find BIG12 Centers According to Height</button>
          <span>       </span>
          <button onClick={()=> {ReactDOM.render(<F4Page/>, document.getElementById('screen'))}}>Search Player According to Name</button>
          <span>       </span>
          <button onClick={()=> {ReactDOM.render(<F5Page/>, document.getElementById('screen'))}}>Add American City</button>
          <span>       </span>
          <button onClick={() => {window.close();}}>Quit</button>
          </nav>
      </header>
    </div>
  );
}

export default App;


