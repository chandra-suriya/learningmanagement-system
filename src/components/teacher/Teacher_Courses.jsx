import React from "react";
import {Link} from "react-router-dom";
import Teacher_Sidebar from "./Teacher_Sidebar";
function Teacher_Courses(){
    return (
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Teacher_Sidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                     <h5 className="card-header">
                        My Courses
                     </h5>
                     <div className="card-body">
                     <table className="table table-bordered">
                     <thead>
                        <tr>
                            <th>Name</th>
                             <th>Total Enrolled</th>
                             <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     <tr>
                        <td>Php Developement</td>
                        <td><Link to="/">123</Link></td>
                        <td>
                            <button className="btn btn-danger  btn-sm active ms-2">Delete</button>
                            <Link to="/add-module/1"><button className="btn  btn-success btn-sm active ms-2">Add Modules</button></Link>
                        </td>
                    </tr>
                     </tbody>

                     </table>

                     </div>
                 </div>
            </section>
        </div>

    </div>
        )
}
export default Teacher_Courses;