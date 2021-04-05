import React from "react";



class Form extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {
            name: 'Andrzej',
            str: generateRandom(),
            hp: generateRandom(),
            speed: generateRandom(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td><label>Imię:</label></td>
                        <td><input name="name" type="text" value={this.state.name} onChange={this.handleChange} /></td>
                    </tr>
                    <tr>
                        <td><label>Siła:</label></td>
                        <td><input name="str" type="text" value={this.state.str} /></td>
                    </tr>
                    <tr>
                        <td><label>Moc:</label></td>
                        <td><input name="hp" type="text" value={this.state.hp} /></td>
                    </tr>
                    <tr>
                        <td><label>Prędkość:</label></td>
                        <td><input name="speed" type="text" value={this.state.speed} /></td>
                    </tr>
                    <tr>
                        <input name="send" type="submit" />
                    </tr>
                </table>
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