import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const ProfileSetting = () => {
    return (

        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Profile</h5>
                        <div className="card-body">
                            <form>
                                <div class="form-group mb-2">
                                    <label for="exampleInputEmail1" className="pb-2">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        
                                </div>
                                <div class="form-group mb-2">
                                    <label for="exampleInputPassword1" className="pb-2">Full name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full name"/>
                                </div>
                                <div className="form-check" >
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ProfileSetting;