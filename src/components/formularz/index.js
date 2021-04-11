import React from "react";
import Bohater from './../bohater';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Andrzej',
            validity: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRefName = React.createRef();
        this.inputRefStr = React.createRef();
        this.inputRefHp = React.createRef();
        this.inputRefSpeed = React.createRef();
        this.submitResult = false;
        this.inputValues = [];
        this.name = "";

        localStorage.clear();
    };



    CheckValidity(event, element, pattern, customMessage) {
        if (this.state.name.match(pattern) == null) {
            element.setCustomValidity(customMessage);
            element.reportValidity();
            return false;
        }
        else {
            element.setCustomValidity("");
            return true;
        }
    }



    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    // 
    handleSubmit(e) {
        e.preventDefault();
        this.submitResult = true;
        if (this.state.name === "") this.submitResult = false;
        this.setState({
            validity: this.submitResult
        });

    if (this.submitResult) {
            this.inputValues.push(this.state.name);
            this.inputValues.push(this.inputRefStr.current.value);
            this.inputValues.push(this.inputRefHp.current.value);
            this.inputValues.push(this.inputRefSpeed.current.value);
            this.inputValues.push(this.submitResult);
        }
    }


    render() {
        return (

            <div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Imię:</label>
                        <input name="name" type="text" ref={this.inputRefName} value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Siła:</label>
                        <input name="str" type="text" ref={this.inputRefStr} value={generateRandom()} readOnly />
                    </div>
                    <div>
                        <label>Moc:</label>
                        <input name="hp" type="text" ref={this.inputRefHp} value={generateRandom()} readOnly />
                    </div>
                    <div>
                        <label>Prędkość:</label>
                        <input name="speed" type="text" ref={this.inputRefSpeed} value={generateRandom()} readOnly />
                    </div>
                    <div>
                        <input name="send" type="submit" />
                    </div>
                </form>
                <Bohater inputs={this.inputValues} />
                {this.inputValues = []}
            </div>
        )
    }

}

function generateRandom() { //between 0 and 100
    const max = 100;
    return Math.floor(max * Math.random());

}



export default Form;