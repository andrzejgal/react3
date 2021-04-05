import React from "react";



class Form extends React.Component {
    constructor(props) {    //ustawiamy wst�pnie value
        super(props);
        this.state = {
            name: 'Andrzej',
            str: generateRandom(),
            hp: generateRandom(),
            speed: generateRandom(),
        };  //je�li value jest puste, to nie mo�emy nic wpisa� do inputa
        //je�li wpiszemy np. Piotr do value, to nie mo�na go zmieni�.
        //dzi�ki temu mo�emy tworzy� formularze, kt�re maj� niezmialne pola, np user.
        //Aby mo�na by�o zmienic, to mo�emy wstawi� jako default lub u�y� onchange
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    /*
    Aby formularz nie wysyla� si� automatycznie, trzeba zatrzyma� formularz przed wyslaniem
    */
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        // formularz ma zawierać:
        // imię
        // siła (str) wartość losowa
        // moc (hp) wartość losowa
        // prędkośc (speed) wartość losowa
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Imię:</label>
                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Siła:</label>
                    <input name="str" type="text" value={this.state.str} />
                </div>
                <div>
                    <label>Moc:</label>
                    <input name="hp" type="text" value={this.state.hp} />
                </div>
                <div>
                    <label>Prędkość:</label>
                    <input name="sppeed" type="text" value={this.state.speed} />
                </div>
                <input name="send" type="submit" />
            </form>
        )
    }
}

function generateRandom() { //between 0 and 100
    //    const min=0;
    const max = 100;
    return Math.floor(max * Math.random());

}

export default Form;