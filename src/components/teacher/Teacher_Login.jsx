import React, { useState, useEffect } from "react";
//import userStore  from "../zustand_store/userStore";
import axios from "axios";


function Teacher_Login() {
    const baseurl = "http://127.0.0.1:8000/api/teacherlogin/";
    const [logindata, setlogindata] = useState({
        "email": "",
        "password": ""
    })
    const [respodata, setrespodata] = useState({});
    const handlechange = (event) => {
        setlogindata({
            ...logindata,
            [event.target.name]: event.target.value
        })
    }
    
    useEffect(()=>{
        document.title = "Teacher Login";
    })
    const submitForm = () => {
        const tea_login_data = new FormData();
        tea_login_data.append("email", logindata.email);
        tea_login_data.append("password", logindata.password)

        try {
            axios.post(baseurl, tea_login_data).then((response) => {
               setrespodata(response.data);
               if(respodata.success===true){
                 localStorage.setItem('teacherloginStatus',"true");
                 window.location.href = "/teacher-dashboard"
               }
            })
        }
        catch (error) {
              console.log(error)
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
                {respodata.success === true && <p className="text-success">please click Another time for sucessful Login!</p>}
                {respodata.success=== false && <p className="text-danger">Invalid UserName and Password</p>}
                    <div className="card">
                        <h5 className="card-header"> Teacher Login</h5>
                        <div className="card-body">
                    
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" onChange={handlechange} value={logindata.email} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />

                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" onChange={handlechange} value={logindata.password} className="form-control" name="password" placeholder="Password" />
                                </div>
                                <div className="form-check mb-4">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
                            

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teacher_Login;