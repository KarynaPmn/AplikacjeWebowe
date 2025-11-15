function Data() {
    const today = new Date();
    const day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    const namefirst = new Date();
    let start = namefirst.getDay();

    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
    const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];

    return `${days[start-1]}: ${day} ${months[month]} ${year} roku`;
}

function Footer(props) {
    return(
        <footer>
            <h5>Dzisiaj jest {<Data />}</h5>
        </footer>
    );
}
export default Footer;