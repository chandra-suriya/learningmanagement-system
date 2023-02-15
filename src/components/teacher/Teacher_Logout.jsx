import React from "react";

const Teacher_Logout = ()=>{
     localStorage.removeItem('teacherloginStatus');
     localStorage.removeItem('teacherid');
     window.location.href = "/teacher-login";
     return (
        <div></div>
     )
}
export default Teacher_Logout;