import React from 'react';

const convert=(wej)=> {
    if (wej) return "true";else return "false";
}

const Bohater = (props) => {
//    let validity=props.validity
//const str=localStorage.getItem("str");
//console.log("props",props);
//let name,str,hp,speed,validity;
const [ name,str,hp,speed,validity]=props.inputs;
console.log("validity: ",validity);
    return (
        <div>
            {/* <p>name:{name}</p>
            <p>str:{str}</p>
            <p>hp:{hp}</p>
            <p>speed:{speed}</p>
            <p>validity: {convert(validity)}</p>
            <p>koniec desktrukturyzacj</p> */}
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
            // </div>
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

