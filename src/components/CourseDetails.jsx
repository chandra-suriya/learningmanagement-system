import React  from "react";
import {useParams} from "react-router-dom";
import Card from "./Card";
const CourseDetails=()=>{
    const {course_id} = useParams();
    return (  
          <div className="container mt-3">
           <div className="row">
                 <div className="col-4"> 
                 <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202009/e-learning_digital_education-1200x1080.jpg?XjMNHsb4gLoU_cC7110HB7jVghJQROOj" className="card-img-top" alt="..." />
                 </div>
                 <div className="col-8">
                    <h3>Course Title</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <p className="fw-bold">Course By :<a href="#">Teacher 1</a></p>
                    <p className="fw-bold">Duration: 3 Hours 30 Minutes</p>
                    <p className="fw-bold">Total Enrolled: 456 students</p>
                    <p className="fw-bold"> Rating: 4.5/5</p>
                 </div>
           </div>

           <div className="card mt-4">
            <div className="card-header">
                Course Videos
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Introduction <button className="btn btn-danger float-end "><i class="bi bi-youtube"></i></button></li>
              <li className="list-group-item">Setup Project <button className=" btn btn-danger float-end"><i class="bi bi-youtube"></i></button> </li>
              <li className="list-group-item">Setup Project <button className=" btn btn-danger float-end"><i class="bi bi-youtube"></i></button> </li>
              <li className="list-group-item">Setup Project <button className=" btn btn-danger float-end"><i class="bi bi-youtube"></i></button> </li>
            </ul>
           </div>
           <div className="container mt-4">
           <h3 className="pb-1 mb-3">Latest Courses <a href="#" className="float-end">See all</a></h3>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

           </div>
              
          </div>
        )
}

export default CourseDetails;