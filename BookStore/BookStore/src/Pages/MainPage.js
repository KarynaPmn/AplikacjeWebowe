import React, {Component} from "react";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newBook: [
                {id: 0, title: "The Bad", imagePath: "TheBad_JoNesbo.jpg"},
                {id: 1, title: "Nemesis", imagePath: "Nemesis_JoNesbo.jpg"},
                {id: 2, title: "The Dvil Star", imagePath: "TheDvilStar_JoNesbo.jpg"}
            ],
            oldBook: [
                {id: 0, title: "The Snowman", imagePath: "TheSnowman_JoNesbo.jpg"},
                {id: 1, title: "The Kingdom", imagePath: "TheKingdom_JoNesbo.jpg"},
                {id: 2, title: "Nemesis", imagePath: "Used_Nemesis_JoNesbo.jpg"}
            ]
        };
    }

    render(){
        return(
            <div className="mainApp">
                <div>
                    <h1>Polecamy nowe książki w najlepszej cenie: </h1>

                    {this.state.newBook.map((item,index)=>(
                        <ol className="book-card">
                            <h2>Tytuł: {item.title}</h2>
                            <h3>Zdjęcie:</h3>
                            <img src={`../images/` + item.imagePath} rel={item.imagePath}></img>
                        </ol>
                    ))}
                </div>

                <div>
                    <h1>Polecamy używane książki w najlepszej cenie: </h1>

                    {this.state.oldBook.map((item,index)=>(
                        <ol className="book-card">
                            <h2>Tytuł: {item.title}</h2>
                            <h3>Zdjęcie:</h3>
                            <img src={'../images/' + item.imagePath} rel={item.imagePath}></img>
                        </ol>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default MainPage;