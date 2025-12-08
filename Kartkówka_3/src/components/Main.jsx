import { useState } from "react";
import kwiatyCzerwoneImg from "../images/kwiaty_czerwone.png";
import kwiatyNiebieskieImg from "../images/kwiaty_niebieskie.png";
import kwiatyFioletoweImg from "../images/kwiaty_fioletowe.png";
import kwiatyZolteImg from "../images/kwiaty_zolte.png";

function Main() {
    const [kwiatyCzerwone_IloscRano, setKwiatyCzerwone_IloscRano] = useState(5);
    const [kwiatyCzerwone_IloscWieczorem, setKwiatyCzerwone_IloscWieczorem] = useState(5);

    const sprzedaj = () => {
        if (kwiatyCzerwone_IloscWieczorem !== 0)
            setKwiatyCzerwone_IloscWieczorem(kwiatyCzerwone_IloscWieczorem - 1);
    };

    const kup = () => {
        setKwiatyCzerwone_IloscRano(kwiatyCzerwone_IloscRano + 1);
        setKwiatyCzerwone_IloscWieczorem(kwiatyCzerwone_IloscWieczorem + 1);
    };

    const [kwiatyNiebieskie_IloscRano, setKwiatyNiebieskie_IloscRano] = useState(5);
    const [kwiatyNiebieskie_IloscWieczorem, setKwiatyNiebieskie_IloscWieczorem] = useState(5);

    const [kwiaty, setKwiaty] = useState([]);
    const przyjmij = () => {
        setKwiaty([
            {nazwa: "fioletowe", iloscRano: 10, iloscWieczorem: 5},
            {nazwa: "zółte", iloscRano: 15, iloscWieczorem: 2}
        ]);
    };

    const usun = () => {
       setKwiaty([]);
    };

    const usunZolteKwiaty = () => {
        const nowe = kwiaty.filter(kwiaty => kwiaty.nazwa === "fioletowy");

        setKwiaty(nowe);
    };

    return (
        <main>
            <div className="main-block">
                <div className="card-block">
                    <div>
                        <h2>Polecamy: kwiaty czerwone</h2>
                        <img src={kwiatyCzerwoneImg} alt="kwiaty" />
                    </div>
                    <div>
                        <div className="ilosc-block">
                            <h3>Ilość rano:</h3>
                            <h3>{kwiatyCzerwone_IloscRano}</h3>
                        </div>

                        <div className="ilosc-block">
                            <h3>Ilość wieczorem:</h3>
                            <h3>{kwiatyCzerwone_IloscWieczorem}</h3>
                        </div>
                    </div>

                    <div className="ilosc-block">
                        <button onClick={() => sprzedaj()}>Sprzedaj</button>
                        <button onClick={() => kup()}>Kup</button>
                    </div>
                </div>

                    <div className="card-block">
                    <div>
                        <h2>Polecamy: kwiaty niebieskie</h2>
                        <img src={kwiatyNiebieskieImg} alt="kwiaty" />
                    </div>
                    <div>
                        <div className="ilosc-block">
                            <h3>Ilość rano:</h3>
                            <h3>{kwiatyNiebieskie_IloscRano}</h3>
                        </div>

                        <div className="ilosc-block">
                            <h3>Ilość wieczorem:</h3>
                            <h3>{kwiatyNiebieskie_IloscWieczorem}</h3>
                        </div>
                    </div>

                    <div className="ilosc-block">
                        <button onClick={() => przyjmij()}>Przyjmij</button>
                        <button onClick={() => usun()}>Usuń</button>
                    </div>
                </div>
            </div>

            {kwiaty.length !== 0 && (
                <div className="main-block">
                    <div className="card-block">
                        <div>
                            <h2>Polecamy: kwiaty fioletowe</h2>
                            <img src={kwiatyFioletoweImg} alt="kwiaty" />
                        </div>
                        <div>
                            <div className="ilosc-block">
                                <h3>Ilość rano:</h3>
                                <h3>{kwiaty[0].iloscRano}</h3>
                            </div>

                            <div className="ilosc-block">
                                <h3>Ilość wieczorem:</h3>
                                <h3>{kwiaty[0].iloscWieczorem}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="card-block">
                        <div>
                            <h2>Polecamy: kwiaty żółte</h2>
                            <img src={kwiatyZolteImg} alt="kwiaty" />
                        </div>
                        <div>
                            <div className="ilosc-block">
                                <h3>Ilość rano:</h3>
                                <h3>{kwiaty[1].iloscRano}</h3>
                            </div>

                            <div className="ilosc-block">
                                <h3>Ilość wieczorem:</h3>
                                <h3>{kwiaty[1].iloscWieczorem}</h3>
                            </div>
                        </div>

                        <button onClick={() => usunZolteKwiaty()}>Usuń</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Main;