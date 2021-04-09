import React from "react";
import Bohater from './../bohater';


const wordPattern = /^([a-zA-Z])+$/;

//var submitResult=false;





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

                localStorage.clear();
    };



    CheckValidity(event, element, pattern, customMessage) {
        if (element.value.match(pattern) == null) {
 //           event.preventDefault();
            element.setCustomValidity(customMessage);
            element.reportValidity();
            return false;
        }
        else {
            element.setCustomValidity("");
            return true;
        }
    }



    writeToLocalStorage() {
        localStorage.setItem('name', this.inputRefName.current.value);
        localStorage.setItem('str', this.inputRefStr.current.value);
        localStorage.setItem('hp', this.inputRefHp.current.value);
        localStorage.setItem('speed', this.inputRefSpeed.current.value);
        localStorage.setItem('validity', 'true');

    }

    handleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.submitResult = this.CheckValidity(e, this.inputRefName.current, wordPattern, "Pole może zawierać tylko litery");
        this.setState({validity: this.submitResult});
        if (this.submitResult) {
            this.writeToLocalStorage();
        }
        else { localStorage.setItem('validity', 'false'); }
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
                <p>validity: {this.state.validity.toString()}</p>
                <Bohater validity={this.state.validity} />
            </div>
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