import React from "react";

const Card = () =>{
    return (
        <div className="col-md-3 col-lg-3 col-xl-3 col-12 p-2">
            <div className="card">
                <img src="https://placehold.co/500x325" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    
                </div>
                <div class="card-footer text-center">
                    <button type="button " class="btn btn-primary">Find Out More!</button>
                </div>
            </div>
        </div>

    );

}

export default Card;