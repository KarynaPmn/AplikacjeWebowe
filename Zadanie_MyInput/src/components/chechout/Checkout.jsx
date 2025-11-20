import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import MyInput from "./MyInput";

function Checkout() {
    const [daneOsobowe, setDaneOsobowe] = useState({
        imie: '',
        nazwisko: ''
    });

    const changeHandler = event => {
        let inputValue = event.target.value;
        let inputName = event.target.name;

        setDaneOsobowe((prevState) => ({
            ...prevState,
            [inputName]: inputValue
        }));
    };

    return (
        <Container>
            <form>
                <Row>
                    <Col xs={12}>
                        <h1>Witamy przy kosie</h1>
                        <h2>Proszę podać dane do wysyłki</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <MyInput 
                            type="text"
                            name="imie"
                            label="Imie"
                            className="form-control"
                            value={daneOsobowe.imie}
                            onChange={changeHandler}
                        />
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <MyInput 
                            type="text"
                            name="nazwisko"
                            label="Nazwisko"
                            className="form-control"
                            value={daneOsobowe.nazwisko}
                            onChange={changeHandler}
                        />
                    </Col>
                </Row>
                
            </form>
        </Container>
    );
}

export default Checkout;