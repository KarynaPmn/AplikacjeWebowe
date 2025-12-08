import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <Header nazwaFirmy="Kminalny Świat Książek" />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
