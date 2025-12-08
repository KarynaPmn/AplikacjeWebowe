import logoImg from "../logoBook.png"

function Header(props) {
    return(
        <header>
            <p>Witamy na stronie firmy: {props.nazwaFirmy}</p>
            <img src={logoImg} rel="LogoBook" id="logo"/>
        </header>
    );
}

export default Header;