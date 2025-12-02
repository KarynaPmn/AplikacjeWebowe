import './App.css';
import fibonaccie from './images/image.png';

let n = 0;

function Fibonaciegi() {
  n = parseInt(n);

  let iloczyn = 1;
  let a = 1;
  let b = 1;
  let temp = b;
  let dzialanie = "1 * "
  for (let i = 0; i < n - 2; i++) {
    dzialanie += temp + " * "
    iloczyn *= temp;
    a = b;
    b = temp;
    temp = a + b;
  }
  iloczyn *= temp;
  dzialanie += temp + " = " + iloczyn;

  return dzialanie;
}

function App() {
  n = prompt("Podaj iość elementów: ");
  let fiboDzialanie = <Fibonaciegi />;
  
  return (
    <div>
      <div className='block_1'>
        <h2>Obliczanie iloczynu n elementów ciągu Fibonacciego</h2>
        <img src={fibonaccie} alt='fibonaccie' />
      </div>

      <div className='block_2'>
        <h3>Ciąg Fibonacciego</h3>
        <p>Iloczyn pierwszych {n} elementów ciągu Fibonacciego: </p>
        <p>{fiboDzialanie}</p>
      </div>
    </div>
  );
}

export default App;
