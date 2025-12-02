import logo from './logo.svg';
import './App.css';

function App() {

  function PoleSzescian(a) {
    return a^3;
  }

  function ObjetoscSzescian(a) {
    return 6*a^2;
  }

  function PoleProstopadloscian(a, b, h) {
    return 2 * a * b + 2 * a * h + 2 * b * h;
  }

  function ObjetoscProstopadloscian(a, b, h) {
    return a * b * h;
  }

  function PoleKolo(r) {
    return 4 * Math.PI * r^2;
  }

  function ObjetoscKolo(r) {
    return 4/3 * Math.PI * r^3;
  }

  const wzory = [
    {"id":0,
      "bryla":"Sześcian",
      "ilustracja":"/img/szescian.png",
      "wzorObjetosc":"V = a^3",
      "wzorPole":"P = 6a^2",
      "wymiar": [
        {"id": 1, "w":2}
      ],
      "wynikPola": PoleSzescian(2),
      "wynikObjetosc": ObjetoscSzescian(2)
    },
    {"id":1,
      "bryla":"Prostopadłóścian",
      "ilustracja":"/img/prostopadloscian.png",
      "wzorObjetosc":"V = a * b * h",
      "wzorPole":"P = 2 * a * b + 2 * a * h + 2 * b * h",
      "wymiar":[
        {"id": 1, "w":3},
        {"id": 2, "w":4},
        {"id": 3, "w":5}
      ],
      "wynikPola": PoleProstopadloscian(3, 4, 5),
      "wynikObjetosc": ObjetoscProstopadloscian(3, 4, 5),
    },
    {"id":2,
      "bryla":"Kolo",
      "ilustracja":"/img/kula.png",
      "wzorObjetosc":"V = 4/3 * pi * r^3",
      "wzorPole":"P = 4 * pi * r^2",
      "wymiar":[
        {"id": 1, "w":4},
      ],
      "wynikPola": PoleKolo(4),
      "wynikObjetosc": ObjetoscKolo(4),
    }
  ]

  return (
    <div className='App'>
      <h1>Bryly</h1>
      <table>
        <thead>
          <tr>
            <th><h2>BRYŁA</h2></th>
            <th><h2>ILUSTRACJA</h2></th>
            <th><h2>WZORY</h2></th>
            <th><h2>PRZYKŁAD</h2></th>
          </tr>
        </thead>

        <tbody>
          {wzory.map((item, index)=>(
              <tr key={index}>
                <td><h3>{item.bryla}</h3></td>
                <td><img src={item.ilustracja} alt='wzory'></img></td>
                <td>Objętość: {item.wzorObjetosc}<br/> Pole: {item.wzorPole}</td>
                <td>
                  <ol>
                    {item.wymiar.map((itemW, indexW)=>(
                      <li key={itemW.id}>Wymiar: {itemW.w}</li>
                    ))}
                  </ol>
                  <div className='wynik'>
                      <div>
                        POLE: {item.wynikPola} <br/>
                        OBJĘTOŚĆ: {item.wynikObjetosc}
                      </div>
                  </div>
                </td>
              </tr>
          ))}

          {/* <tr>
            <td><h3>SZEŚCIAN</h3></td>
            <td>Img</td>
            <td>Objętość: V = a^3 <br/> Pole: P = 6a^2</td>
            <td>
              <p>1. wymiar: 2</p>
              <div className='wynik'>
                POLE: 24 <br/>
                OBJĘTOŚĆ: 8
              </div>
            </td>
          </tr>

          <tr>
            <td><h3>PROSTOPADŁOŚCIAN</h3></td>
            <td>Img</td>
            <td>Objętość: V = a * b * h <br/> Pole: P = 2 * a * b + 2 * a * h + 2 * b * h</td>
            <td>
              <p>
                1. wymiar: 3 <br />
                2. wymiar: 4 <br />
                3. wymiar: 5 <br />
              </p>
              
              <div className='wynik'>
                POLE: 94 <br/>
                OBJĘTOŚĆ: 60
              </div>
            </td>
          </tr>

          <tr>
            <td><h3>KOŁO</h3></td>
            <td>Img</td>
            <td>Objętość: V = 4/3 * pi * r^3 <br/> Pole: P = 4 * pi * r^2</td>
            <td>
              <p>1. wymiar: 4</p>
              <div className='wynik'>
                POLE: 200.96 <br/>
                OBJĘTOŚĆ: 267.94666666666666
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default App;
