import { useState } from "react";

function EmailInput() {
    const [errorEmail, setErrorEmail] = useState('');

    function evauateEmail(event) {
        const enteredEmail = event.target.value;
        alert("funkcyjka");

        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) 
            setErrorEmail("Błędny adres email.");
        else 
            setErrorEmail("Jest dobrze");
    };

    return (
        <div>
            <h5>Wejściówka</h5>
            <input placeholder="user@skrzynka" type="email" onBlur={evauateEmail} />
            <p>{errorEmail}</p>
        </div>
    );
}

export default EmailInput;