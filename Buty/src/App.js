import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header title="Polecamy eleganckie buty firmy: Moje Obówie" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
