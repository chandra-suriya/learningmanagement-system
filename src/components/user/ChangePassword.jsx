import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const ChangePassword = () => {
    return (

        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className='card-header'> Reset Password</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" className="pb-2">Enter your Password to reset</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <hr/>
                                <button type="submit" className="btn btn-primary">Reset Password</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default ChangePassword;