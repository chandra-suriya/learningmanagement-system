import React, { useEffect, useState } from "react";
import axios from "axios";

function Teacher_Register() {
    const baseurl ="http://127.0.0.1:8000/api/teacherRegister/";
    const [teacherdata, setTeacherdata] = useState({
        "full_name": "",
        "email": "",
        "password": "",
        "qualification": "",
        "mobile_no": "",
        "skills": "",
        "status": ""

    });

    useEffect(() => {
        document.title = "Teacher Register";
    })

    const handleChange = (event) => {
        setTeacherdata({
            ...teacherdata,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = () => {
        const teacher_form_data = new FormData();
        teacher_form_data.append("full_name", teacherdata.full_name);
        teacher_form_data.append("email", teacherdata.email);
        teacher_form_data.append("password", teacherdata.password);
        teacher_form_data.append("qualification", teacherdata.qualification);
        teacher_form_data.append("mobile_no", teacherdata.mobile_no);
        teacher_form_data.append("skills", teacherdata.skills);

        try {
            axios.post(baseurl, teacher_form_data).then((response) => {
                console.log(response.data)
                setTeacherdata({
                    "full_name": "",
                    "email": "",
                    "password": "",
                    "qualification": "",
                    "mobile_no": "",
                    "skills": "",
                    "status": "success"
                });
            });
        }catch(error){
            setTeacherdata({
                "status":"Error"
            });
        }

    }
    const teacherloginstatus = localStorage.getItem('teacherloginStatus')
    if(teacherloginstatus === "true"){
        window.location.href = "/teacher-dashboard";
    }
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherdata.status==="success" && <p className="text-sucess">Thanks for registration</p>}
                    <div className="card">
                        <h5 className="card-header"> Teacher Register</h5>
                        <div className="card-body">
                           
                                <div className="form-group mb-4">
                                    <label >Full Name</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="full_name" placeholder="Enter UserName" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" onChange={handleChange} className="form-control" name="email" placeholder="Enter Email" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Qualification</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="qualification" placeholder="Qualification" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                    <input type="text" onChange={handleChange} className="form-control" name="mobile_no" placeholder="Mobile num" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={handleChange} className="form-control" name="password" placeholder="Password" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Re Password</label>
                                    <input type="password" className="form-control" name="password2" placeholder="Password" />
                                </div>

                                <div className="form-group mb-4">
                                    <label htmlFor="exampleFormControlTextarea1">Skills</label>
                                    <textarea className="form-control" onChange={handleChange} id="exampleFormControlTextarea1" name="skills" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" className="form-text text-muted">Ex python, java ...</small>
                                </div>
                                <button onClick={submitForm} type="submit" className="btn btn-primary">Submit</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Teacher_Register