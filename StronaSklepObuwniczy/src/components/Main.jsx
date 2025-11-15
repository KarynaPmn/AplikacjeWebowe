import { useState } from "react";

function Main() {
    const [obuwie, setObuwie] = useState([
        { id: 1, typ: "letnie", rodzaj: "sandały", stanMagazynu: 10, imgPath: "sandaly" },
        { id: 2, typ: "letnie", rodzaj: "skórzane sneakersy", stanMagazynu: 0, imgPath: "skorzane" },
        { id: 3, typ: "zimowe", rodzaj: "kozaki", stanMagazynu: 4, imgPath: "kozaki"},
        { id: 4, typ: "zimowe", rodzaj: "zimowe buty", stanMagazynu: 1, imgPath: "zimoweButy" },
        { id: 5, typ: "letnie", rodzaj: "japonki", stanMagazynu: 8, imgPath: "japonki" },
        { id: 6, typ: "zimowe", rodzaj: "ciepłe na obcasie", stanMagazynu: 1, imgPath: "naObcasie" },
    ]);

    const [widok, setWidok] = useState("wszystkie");

    const widoczneObuwie = obuwie.filter((item) => {
        if (widok === "letnie") return item.typ === "letnie";
        if (widok === "zimowe") return item.typ === "zimowe";
        if (widok === "wyprzedane") return item.stanMagazynu === 0;

        return true;
    });

    const przyjmijLetnie = () => {
        const nowe = [
            { id: Date.now() + 1, typ: "letnie", rodzaj: "sandaly z kwiatkami", stanMagazynu: 6, imgPath: "sandalyZKwiatkami" },
            { id: Date.now() + 2, typ: "letnie", rodzaj: "sportowe", stanMagazynu: 5, imgPath: "sportowe" },
        ];
        setObuwie([...obuwie, ...nowe]);
        setWidok("letnie");
    };

    const przyjmijZimowe = () => {
        const nowe = [
            { id: Date.now(), typ: "zimowe", rodzaj: "śniegowce", stanMagazynu: 3, imgPath: "sniegowce"},
            { id: Date.now() + 1, typ: "zimowe", rodzaj: "ocieplane trapery", stanMagazynu: 7, imgPath: "ocieplaneTrapery"},
        ];
        setObuwie([...obuwie, ...nowe]);
        setWidok("zimowe");
    };

    const usunWyprzedane = () => {
        setObuwie(obuwie.filter((item) => item.stanMagazynu > 0));
    };

    const sprzedaz = (id) => {
        setObuwie(obuwie.map(item =>
            item.id === id && item.stanMagazynu > 0
                ? { ...item, stanMagazynu: item.stanMagazynu - 1 }
                : item
        ));
    };

    const przyjecie = (id) => {
        const liczba = parseInt(prompt("Podaj liczbę przyjętych butów:"), 10);
        
        if (!isNaN(liczba) && liczba > 0) {
            setObuwie(obuwie.map(item =>
                item.id === id
                    ? { ...item, stanMagazynu: item.stanMagazynu + liczba }
                    : item
            ));
        }
    };

    return (
        <main>
            <div className="buttons-block">
                <button onClick={przyjmijLetnie}>Przyjmij obuwie letnie</button>
                <button onClick={przyjmijZimowe}>Przyjmij obuwie zimowe</button>
                <button onClick={usunWyprzedane}>Usuń wyprzedane</button>
            </div>

            <div className="oferta-block">
                <h2>Nasza oferta:</h2>
                
                {widoczneObuwie.map((item) => (
                    <div key={item.id} className="card-block">
                        <img src={`../assets/images/${item.imgPath}.jpg`} alt={item.rodzaj} />

                        <div className="card">
                            <p>Rodzaj: {item.rodzaj}</p>
                            <h4>Stan magazynu: {item.stanMagazynu}</h4>

                            <div className="buttons-block">
                                <button onClick={() => sprzedaz(item.id)}>Sprzedaż detaliczna</button>
                                <button onClick={() => przyjecie(item.id)}>Przyjęcie tych butów</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Main;
