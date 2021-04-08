import React from 'react';

// var validity;

// const readFromLocalStorage = () => {
//     let validity = localStorage.getItem("validity");
//     str = localStorage.getItem("str");
//     const hp = localStorage.getItem("hp");
//     const speed = localStorage.getItem("speed");

const Bohater = (props) => {
//    const [validity,setValidity]=useState(true);
    // convertToBool(props)
    // const name=localStorage.getItem("name");
    let validity=props.validity;
    return (
        <div>
            {
                validity ?
                    <div>
                        < p > Name: "Andrzej"</p >
                        <p>Str: {localStorage.getItem("str")}</p>
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

