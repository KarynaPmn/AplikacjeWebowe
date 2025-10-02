import React, {Component} from "react";
import Header from "./Header";
import BookOpis from "./BookOpis";
import Footer from "./Footer";
class Book extends Component {
    render() {
        return (
            <div>
                <Header nazwa='Uniwersytet Adama Mickiewicza' miasto='Poznaniu' />
                <BookOpis />
                <Footer />
            </div>
        )
    }
}

export default Book;