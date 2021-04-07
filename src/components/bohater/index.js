import React from 'react';

const Bohater=()=> {
    const { name, str, hp, speed} = useContext(CharsStats);
    return (
            <div >
                {/* <h1>{props.poziom}</h1> */}
                <p>Name: {name}</p>
                <p>Str: {str}</p>
                <p>hp" {hp}</p>
                <p>speed: {speed}</p>
             </div>
        )
    

}

export default Bohater;

