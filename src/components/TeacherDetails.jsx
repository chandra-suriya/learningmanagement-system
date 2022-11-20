import React from "react";
import {Link} from "react-router-dom";
function TeacherDetails(){
    return (
        <div className="container mt-3">
        <div className="row">
              <div className="col-4"> 
              <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj" className="card-img-top" alt="..." />
              </div>
              <div className="col-8">
                 <h3>John Doe</h3>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                 <p className="fw-bold">Skills :<Link to="">Php</Link>,<Link to="">Python</Link>,<Link to="">JavaScript</Link></p>
                 <p className="fw-bold">Recent Course : <Link to="">ReactJs course</Link></p>
                 <p className="fw-bold"> Rating: 4.5/5</p>
              </div>
        </div>

        <div className="card mt-4">
         <div className="card-header">
             <h5>Course List</h5>
         </div>
         <ul className="list-group list-group-flush">
           <Link to="/detail/1" className="list-group-item list-group-item-action"> Php Course</Link>
           <Link to="/detail/1" className="list-group-item list-group-item-action"> Python Course</Link>
           <Link to="/detail/1" className="list-group-item list-group-item-action"> Javascript Course</Link>
         </ul>
        </div>
       
           
       </div>
        )
}

export default TeacherDetails;