import React from 'react';


const Bohater = (props) => {
const [ name,str,hp,speed,validity]=props.inputs;
console.log("validity: ",validity);
    return (
        <div>
            {
                validity ?
                    <div>
                        < p > Name: {name}</p >
                        <p>Str: {str}</p>
                        <p>hp: {hp}</p>
                        <p>speed: {speed}</p>
                    </div >
                    : <div>to formularz</div>
            }</div>
        )
}



export default Bohater;

