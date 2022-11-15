import React from "react";
import {Link} from "react-router-dom";

function Teacher_Sidebar() {
    return (
        <div class="card" >
            <div class="card-header">
               <Link to="/teacher-dashboard"  className="list-group-item list-group-item-action"><h5>Dash board</h5></Link> 
            </div>
            <ul class="list-group list-group-flush">
                <Link to="/teacher-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/add-course" className="list-group-item list-group-item-action">Add Courses</Link>
                <Link to="/my-students" className="list-group-item list-group-item-action">My students</Link>
                <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/teacher-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/teacher-login" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </ul>
        </div>
    )
}
export default Teacher_Sidebar;