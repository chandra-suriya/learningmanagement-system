import React from "react";

const Teacher_Logout = ()=>{
     localStorage.removeItem('teacherloginStatus');
     window.location.href = "/teacher-login";
     return (
        <div></div>
     )
}
export default Teacher_Logout;