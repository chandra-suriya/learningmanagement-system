import React from "react";
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <div className="col-md-3 mt-4">
            <div className="card" style={{ width: "13rem" }}>
                <Link to="/detail/1"><img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj" className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <Link to="/about"><h5 className="card-title">Course Title</h5></Link>
                </div>
                <div className="card-footer">
                     <div className="title">
                             <span><p>Rating: 4.5/5</p></span>
                             <span className="float-end">Views: 2341</span>
                     </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
