import React from "react";
//usuwamy props
// const Form = () => {
//     return (
//         <form>
//             <label>Imiê:</label>
//             <input name="name" type="text" value={this.state.value} />
//             <input name="send" type="submit" />
//         </form>
//     )
// }

/* 
Komponent funkcyjny nie mo¿e mieæ this, wobec czego przenosimy formê do komponentu klasowego
*/



class Form extends React.Component {
    constructor(props) {    //ustawiamy wstêpnie value
        super(props);
        this.state = { value: 'Piotr' };  //jeœli value jest puste, to nie mo¿emy nic wpisaæ do inputa
        //jeœli wpiszemy np. Piotr do value, to nie mo¿na go zmieniæ.
        //dziêki temu mo¿emy tworzyæ formularze, które maj¹ niezmialne pola, np user.
        //Aby mo¿na by³o zmienic, to mo¿emy wstawiæ jako default lub u¿yæ onchange
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
/*
Aby formularz nie wysyla³ siê automatycznie, trzeba zatrzymaæ formularz przed wyslaniem
*/
handleSubmit(e) {
    e.preventDefault();
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Imiê:</label>
                <input name="name" type="text" value={this.state.value} onChange={this.handleChange}/>
                <input name="send" type="submit" />
            </form>
        )
    }
}

export default Form;