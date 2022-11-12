import React from "react";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div class="card" >
            <div class="card-header">
               <Link to="/user-dashboard"  className="list-group-item list-group-item-action"><h5>Dash board</h5></Link> 
            </div>
            <ul class="list-group list-group-flush">
                <Link to="/my-courses" className="list-group-item list-group-item-action">My Courses</Link>
                <Link to="/favour-courses" className="list-group-item list-group-item-action">Favourite Courses</Link>
                <Link to="/recommended" className="list-group-item list-group-item-action">Recommended Courses</Link>
                <Link to="/user-profile-setting" className="list-group-item list-group-item-action">Profile Settings</Link>
                <Link to="/user-change-password" className="list-group-item list-group-item-action">Change Password</Link>
                <Link to="/user-login" className="list-group-item list-group-item-action text-danger">Logout</Link>
            </ul>
        </div>
    )
}
export default Sidebar;