import React from "react";

const Card = () =>{
    return (
    <div className="card mx-4" style={{ width: "18rem"}}>
        <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        
        <div className="card-body">
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
    </div>

    );

}

export default Card;