import { useState } from "react";

const Obuwie = [
    {id: 1, typ: "letnie", rodzaj: "sandały", stanMagazynu: 10 },
    {id: 2, typ: "letnie", rodzaj: "klapki", stanMagazynu: 0 },
    {id: 3, typ: "zimowe", rodzaj: "kozaki", stanMagazynu: 4 },
    {id: 4, typ: "zimowe", rodzaj: "trapry", stanMagazynu: 1 },
    {id: 5, typ: "letnie", rodzaj: "japonki", stanMagazynu: 8 },
]

function Main() {
    const LetnieObuwie = Obuwie.filter((obuwie) => obuwie.typ === "letnie");
    const ZimoweObuwie = Obuwie.filter((obuwie) => obuwie.typ === "zimowe");
    const WyprzedaneObuwie = Obuwie.filter((obuwie) => obuwie.stanMagazynu === 0);

    const [wszyskieObuwie, setWszystkieObuwie] = useState([
        {typ: "letnie", info: LetnieObuwie},
        {typ: "zimowe", info: ZimoweObuwie},
    ]);

    function handlerClickLetnie() {
        setWszystkieObuwie([
            {typ: "letnie", info: LetnieObuwie}
        ]);
    }

    const handlerClickZimowe = () => {
        setWszystkieObuwie([
            {typ: "zimowe", info: ZimoweObuwie}
        ]);
    }

    const handlerClickWyprzedane = () => {
        setWszystkieObuwie([
            {typ: "wypzedane", info: WyprzedaneObuwie}
        ]);
    }
    const handlerClickSprzedaz = (props) => {
        props =- 1;
    }

    return (
        <main>
            <div className="buttons-block">
                <button onClick={handlerClickLetnie}>Przyjmij obuwie letnie</button>
                <button onClick={handlerClickZimowe}>Przyjmij obuwie zimowe</button>
                <button onClick={handlerClickWyprzedane}>Usuń wyprzedane</button>
            </div>

            <div className="oferta-block">
                <h2>Nasza oferta:</h2>

                {wszyskieObuwie.map((typ, index) => (
                    <div key={index} className="block">
                        <h3>Obuwie {typ.typ}</h3>
                            {typ.info.map((item) => (
                                <div className="card-block">
                                    <img />
                                    <div key={item.id}>
                                        <p>Rodzaj: {item.rodzaj}</p>
                                        <h4>Stan magazynu: {item.stanMagazynu}</h4> 

                                        {/* Poparawić */}
                                        <div className="buttons-block">
                                            <button onClick={handlerClickSprzedaz(item.stanMagazynu)}>Sprzedarz detaliczna</button>
                                            <button>Przyjęcie tych butów</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        
                    </div>
                ))}

            </div>
        </main>
    );
}

export default Main;