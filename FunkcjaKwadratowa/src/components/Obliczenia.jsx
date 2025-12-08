import { useState } from "react";
import delta_1 from "../images/delta_1.jpg";
import delta_2 from "../images/delta_2.jpg";
import delta_3 from "../images/delta_3.jpg";
import delta_4 from "../images/delta_4.jpg";
import delta_5 from "../images/delta_5.jpg";
import delta_6 from "../images/delta_6.jpg";


function Obliczenia() {
    const [a, setA] = useState(2);
    const [b, setB] = useState(3);
    const [c, setC] = useState(4);

    const [deltaWynik, setDeltaWynik] = useState(null);
    const [x0Wynik, setX0Wynik] = useState(null);
    const [x1Wynik, setX1Wynik] = useState(null);
    const [x2Wynik, setX2Wynik] = useState(null);

    const [pokazWynik, setPokazWynik] = useState(false);
    const [grafika_1, setGrafika_1] = useState(null);
    const [grafika_2, setGrafika_2] = useState(null);

    const [errorMessage, setErrorMessage] = useState(null)

    const onChangeOblicz = () => {
        const aNum = Number(a);
        const bNum = Number(b);
        const cNum = Number(c);

        if (aNum === 0 || bNum === 0 || cNum === 0) {
            setErrorMessage("Podaj wszystkie wartości poprawnie!");
            setPokazWynik(false);
            setGrafika_1(null);
            setGrafika_2(null);
        }
        else {
            setErrorMessage("");
            setPokazWynik(true);

            const delta = bNum * bNum - 4 * aNum * cNum;
            setDeltaWynik(delta);

            setX0Wynik(null);
            setX1Wynik(null);
            setX2Wynik(null);
            

            if (delta > 0) {
                setX1Wynik((-bNum - Math.sqrt(delta)) / (2 * aNum));
                setX2Wynik((-bNum + Math.sqrt(delta)) / (2 * aNum));

                setGrafika_1(delta_3);
                setGrafika_2(delta_6);
            } 
            else if (delta === 0) {
                setX0Wynik(-bNum / (2 * aNum));

                setGrafika_1(delta_2);
                setGrafika_2(delta_5);
            }
            else if (delta < 0) {
                setGrafika_1(delta_1);
                setGrafika_2(delta_4);
            }
        }
        
    };

    return (
        <div className="mainBlock-2">
            <div>
                <h3>Przykładowe obliczenia</h3>

                {errorMessage !== "" && (
                    <h5>{errorMessage}</h5>
                )}

                <div className="input-block">
                    <label htmlFor={a}>Proszę podać a: </label>
                    <input 
                        type="number"
                        value={a}
                        onChange={(e) => setA(e.target.value)}
                    />
                </div>

                <div className="input-block"> 
                    <label htmlFor={b}>Proszę podać b:</label>
                    <input 
                        type="number"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                    />
                </div>

                <div className="input-block">
                    <label htmlFor={c}>Proszę podać c: </label>
                    <input 
                        type="number"
                        value={c}
                        onChange={(e) => setC(e.target.value)}
                    />
                </div>

                <hr /><br />

                <p>Równanie postaci: </p>
                <h5>{a}x^2 + {b}x + {c} = 0</h5>

                <button onClick={onChangeOblicz}>Oblicz</button> 

                {pokazWynik && (
                    <div>
                        <h5>Delta: {deltaWynik}</h5>
                        {x0Wynik !== null && <h5>x0 = {x0Wynik}</h5>}
                        {x1Wynik !== null && <h5>x1 = {x1Wynik}</h5>}
                        {x2Wynik !== null && <h5>x2 = {x2Wynik}</h5>}
                    </div>
                )}
            </div>

            <div className="grafika-block">
                <h3>Interpretacja graficzna:</h3>
                {grafika_1 !== null &&
                    <img src={grafika_1} alt="grafika" />
                }

                {grafika_2 !== null &&
                    <img src={grafika_2} alt="grafika" />
                }
            </div>
        </div>
    );
}

export default Obliczenia;
