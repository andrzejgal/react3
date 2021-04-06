import React from "react";

const wordPattern = /^[a-zA-Z]+$/;


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Andrzej',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputRefName=React.createRef();
        this.inputRefStr=React.createRef();
        this.inputRefHp=React.createRef();
        this.inputRefSpeed=React.createRef();
    };


    CheckValidity(event, element, pattern, customMessage) {
        if (element.value.match(pattern) == null) {
            event.preventDefault();
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
    this.setState({name:e.target.value});
}

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        this.CheckValidity(e, this.inputRefName.current, wordPattern, "Pole może zawierać tylko litery");
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Imię:</label>
                    <input name="name" type="text" ref={this.inputRefName} value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Siła:</label>
                    <input name="str" type="text" ref={this.inputRefStr} placeholder={generateRandom()} />
                </div>
                <div>
                    <label>Moc:</label>
                    <input name="hp" type="text" ref={this.inputRefHp} placeholder={generateRandom()} />
                </div>
                <div>
                    <label>Prędkość:</label>
                    <input name="speed" type="text" ref={this.inputRefSpeed} placeholder={generateRandom()} />
                </div>
                <div>
                    <input name="send" type="submit" />
                </div>
            </form>
        )
    }
}

function generateRandom() { //between 0 and 100
    //    const min=0;
    const max = 100;
    return Math.floor(max * Math.random());

}




// nameValidation = (fieldName, fieldValue) => {
//     if (fieldValue.trim() === '') {
//       return {fieldName} +"nie może byc puste";
//     }
//     if (/[^a-zA-Z -]/.test(fieldValue)) {
//       return "Imię może zawierać tylko litery";
//     }
//     return null;
//   };


export default Form;