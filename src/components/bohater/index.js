import React from 'react';


const Bohater = (props) => {
    let validity=props.validity;
const str=localStorage.getItem("str");
    return (
        <div>
            {
                validity ?
                    <div>
                        < p > Name: "Andrzej"</p >
                        <p>Str: {str}</p>
                        <p>hp:{localStorage.getItem("hp")}</p>
                        <p>speed: {localStorage.getItem("speed")}</p>
                    </div >
                    : <div>to formularz</div>
            }</div>
    )


}


// const Bohater = () => {
//     // const { name, str, hp, speed} = useContext(CharsStats);
//     [validity, setValidity] = setState(false);
//     return (
//         {
//             validity ?
//                 <div>
//                 < p > Name: { localStorage.getItem("name"); }</p >
//                 <p>Str: { localStorage.getItem("str"); }</p>
//                 <p>hp:{ localStorage.getItem("hp"); }</p>
//                 <p>speed: { localStorage.getItem("speed"); }</p>
//              </div >
//              : <div>to formularz</div>
//         }
// )

    

// }

export default Bohater;

