import logo from './logo.svg';
import './App.css';
import { App as TonomyApp} from 'tonomy-id-sdk';
import './tonomy.css';

function App() {
  async function onButtonPress() {
    TonomyApp.onPressLogin({callback: '/callback'});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          market.com (localhost:3001)
        </p>
        <button className="tonomy" onClick={onButtonPress}>Login with Tonomy ID</button>
      </header>
    </div>
  );
}

export default App;
