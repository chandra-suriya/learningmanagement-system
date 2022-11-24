import React from "react";
import {Link} from "react-router-dom";

const TeacherCard = (props) => {
    return (
        <div className="col-md-3 mt-4">
            <div className="card" style={{ width: "13rem" }}>
                <Link to="/detail/1"><img src="https://static.vecteezy.com/system/resources/previews/005/519/978/original/cartoon-drawing-of-a-teacher-vector.jpg" className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                   <h5 className="card-title">{props.name}</h5>
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
export default TeacherCard;
