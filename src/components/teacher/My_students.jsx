import React from "react";
import Teacher_Sidebar from "./Teacher_Sidebar";
import {Link} from  "react-router-dom";
function My_students(){
    return (
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Teacher_Sidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                     <h5 className="card-header">
                        Recommended Course
                     </h5>
                     <div className="card-body">
                     <table className="table table-bordered">
                     <thead>
                        <tr>
                            <th>Name</th>
                             <th>Enrolled Course</th>
                             <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     <tr>
                        <td>chan</td>
                        <td><Link to="/">Php</Link></td>
                        <td>
                            <button className="btn btn-danger  btn-sm active">Delete</button>
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
export default My_students;