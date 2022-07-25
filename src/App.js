import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contactList';

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContactList></ContactList>
    </div>
  );
}

export default App;
