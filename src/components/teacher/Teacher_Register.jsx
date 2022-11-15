import React from "react";

function Teacher_Register() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header"> Teacher Register</h5>
                        <div className="card-body">
                            <form className="pb-4">
                                <div className="form-group mb-4">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />

                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />

                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleInputEmail1">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter FullName" />

                                </div>

                                <div className="form-group mb-4">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <div className="form-group mb-4">
                                    <label for="exampleInputPassword1">Re Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="form-group mb-4">
                                    <label for="exampleFormControlTextarea1">Interest</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" class="form-text text-muted">Ex python, java ...</small>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Teacher_Register