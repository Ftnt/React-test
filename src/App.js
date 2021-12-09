import logo from './logo.svg';
import './App.css';
// import { Greeting, Greeting2 } from './components/Greeting';s
// import Name from './components/Name';
// import { Calculator } from './components/Calculator';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Name firstName='jAiro' lastName='Rocano' /> */}
        {/* <Calculator valorA='1' valorB='4' operador="resta" /> */}

        <Counter />

      </header>
    </div>
  );
}

export default App;
