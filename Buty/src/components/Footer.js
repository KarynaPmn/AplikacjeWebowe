function Data() {
    const today = new Date();
    const day = today.getDate();
    let month = today.getMonth()+1;
    const year = today.getFullYear();

    const namefirst = new Date();
    let start = namefirst.getDay();

    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    return `${days[start-1]}: ${day}.${month}.${year}`;
}

function Footer(props) {
    return(
        <h5>Dzisiaj jest {<Data />}</h5>
    );
}
export default Footer;