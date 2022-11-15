import React from "react";

function Teacher_Login() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header"> Teacher Login</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-4">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="text"className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                                       
                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password"className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="form-check mb-4">
                                    <input type="checkbox"className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit"className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teacher_Login;