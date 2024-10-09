import React from "react";

const Jumbotron = () => {
    return(
      <div className='mx-3'>
        <div className="p-2  bg-body-tertiary rounded-3 my-4 mx-auto" style={{ backgroundColor: 'rgba(215,215,215, 0.3)'}}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-normal" style={{fontSize: '60px'}}>A Warm Welcome!</h1>
          <p className="col-md-11 fs-4 mx-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, ipsa itaque beatae modi explicabo recusandae sint placeat? Odio corrupti repudiandae repellat quasi.</p>
          <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
        </div>
      </div>
    </div>
    );
}


export default Jumbotron