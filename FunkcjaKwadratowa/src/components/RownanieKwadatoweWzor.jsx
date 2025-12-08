function RownanieKwadratoweWzor() {
    return (
        <div className="mainBlock-1">
            <h3>Postać ogólna</h3>
            <p>ax^2 + bx + c = 0</p>
            <p>wyrożnik równania kwadratowego</p>

            <h5>delta = b^2 - 4ac</h5>
                <ul>
                    <li><h5>
                        jeśli delta {'>'} 0 to równanie ma dwa rozwiązania: <br />
                        x1 = (-b - sqrt(delta) / (2a))  <br />
                        x1 = (-b + sqrt(delta) / (2a))  
                    </h5></li>
                    <li><h5>
                        jeśli delta = 0 to równanie ma jedno rozwiązanie: <br />
                        x0 = (-b / (2a))  
                    </h5></li>
                    <li><h5>
                        jeśli delta {'<'} 0 to równanie nie ma rozwiązania
                    </h5></li>
                </ul>
            <hr />
        </div>
    );
}

export default RownanieKwadratoweWzor;