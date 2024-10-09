import React from 'react';
import Card from "./card.jsx";

const Contenedor = () =>{
    return(<>
    <div className= "d-flex flex-wrap justify-content-evenly mb-5 mx-2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
    );
}

export default Contenedor ;