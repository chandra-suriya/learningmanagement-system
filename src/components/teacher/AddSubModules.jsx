import React from "react";
import Teacher_Sidebar from "./Teacher_Sidebar";
import {Link} from  "react-router-dom";

function AddSubModules(){
    
    return (
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Teacher_Sidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                        <h5 className='card-header'> Add Modules </h5>
                        <div className="card-body">
                            <form>
                            
                            <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Title</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter UserName" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" className="form-text text-muted">Ex python, java ...</small>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="exampleInputPassword1" className="pb-2">Add Video</label>
                                    <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Choose file"/>
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleFormControlTextarea1">Remarks</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" className="form-text text-muted">Something about the video ...</small>
                                </div>
                                <hr/>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
            </section>
        </div>

    </div>
    )
}
export default AddSubModules;