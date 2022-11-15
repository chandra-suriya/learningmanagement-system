import React from "react";
import {Link} from "react-router-dom";
import Teacher_Sidebar from "./Teacher_Sidebar";
const Teacher_Dashboard = () => {
    return (
        
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Teacher_Sidebar />
                </aside>
                <section className="col-md-9">
                  <div className="card">
                        <div className="body">
                        
                        </div>
                  </div>
                </section>
            </div>

        </div>
    )
}

export default Teacher_Dashboard;