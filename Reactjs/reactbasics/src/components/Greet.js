import React from 'react';

// function Greet(){
//     return <h1>Hello World!!!!</h1>
// }
const Greet = (props) => {
    console.log(props);
    // props.name = 'saksham';
    return (
        <>
    <h1 className="hello">Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
    </>
    )
    // return React.createElement('div',{id:'hello',className:'helloClass'},React.createElement('h1',null,'Hello World!!!!'))
}

export default Greet;