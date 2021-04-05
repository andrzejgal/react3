import React from "react";
//usuwamy props
// const Form = () => {
//     return (
//         <form>
//             <label>Imi�:</label>
//             <input name="name" type="text" value={this.state.value} />
//             <input name="send" type="submit" />
//         </form>
//     )
// }

/* 
Komponent funkcyjny nie mo�e mie� this, wobec czego przenosimy form� do komponentu klasowego
*/



class Form extends React.Component {
    constructor(props) {    //ustawiamy wst�pnie value
        super(props);
        this.state = { value: 'Piotr' };  //je�li value jest puste, to nie mo�emy nic wpisa� do inputa
        //je�li wpiszemy np. Piotr do value, to nie mo�na go zmieni�.
        //dzi�ki temu mo�emy tworzy� formularze, kt�re maj� niezmialne pola, np user.
        //Aby mo�na by�o zmienic, to mo�emy wstawi� jako default lub u�y� onchange
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
/*
Aby formularz nie wysyla� si� automatycznie, trzeba zatrzyma� formularz przed wyslaniem
*/
handleSubmit(e) {
    e.preventDefault();
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Imi�:</label>
                <input name="name" type="text" value={this.state.value} onChange={this.handleChange}/>
                <input name="send" type="submit" />
            </form>
        )
    }
}

export default Form;