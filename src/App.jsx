import React  from "react";
import Home from "./components/Home";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import {Routes as Switch,Route} from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import TeacherDetails from "./components/TeacherDetails";
import LatestCourses from "./components/AllCourses.jsx";
import PopularCourses from "./components/PopularCourses";
import PopularTeachers from "./components/PopularTeachers";

//User
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Dashboard from "./components/user/Dashboard";
import Mycourses from "./components/user/Mycourses";
import FavouriteCourse from "./components/user/FavouriteCourses";
import RecommendedCourse from "./components/user/Recommendedcourse";
import ProfileSetting from "./components/user/ProfileSetting";
import ChangePassword from "./components/user/ChangePassword";

//Teacher
import Teacher_Login from "./components/teacher/Teacher_Login";
import Teacher_Register from "./components/teacher/Teacher_Register";
import Teacher_Dashboard from "./components/teacher/Teacher_Dashboard";
import AddCourse from "./components/teacher/AddCourses";
import My_students from "./components/teacher/My_students";
import Teacher_Courses from "./components/teacher/Teacher_Courses";
import Teacher_ProfileSetting from "./components/teacher/Teacher_ProfileSetting";
import Teacher_ChangePassword from "./components/teacher/Teacher_ChangePassword";
 
function App(){
    return(
         <div>
         <Header />
         <Switch>
             <Route path="/" element={<Home />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/detail/:course_id" element={<CourseDetails />}/>
             <Route path="/user-login" element={<Login />}/>
             <Route path="/user-register" element={<Register />}/>
             <Route path="/user-dashboard" element={<Dashboard />}/>
             <Route path="/my-courses" element={<Mycourses />}/>
             <Route path="/favour-courses" element={<FavouriteCourse />}/>
             <Route path="/recommended" element={<RecommendedCourse />}/>
             <Route path="/user-profile-setting" element={<ProfileSetting />}/>
             <Route path="/user-change-password" element={<ChangePassword />}/>
             <Route path="/teacher-login" element={<Teacher_Login />}/>
             <Route path="/teacher-register" element={<Teacher_Register />}/>
             <Route path="/teacher-dashboard" element={<Teacher_Dashboard />}/>
             <Route path="/add-course" element={<AddCourse />}/>
             <Route path="/my-students" element={<My_students />}/>
             <Route path="/teacher-courses" element={<Teacher_Courses />}/>
             <Route path="/teacher-profile-setting" element={<Teacher_ProfileSetting />}/>
             <Route path="/teacher-change-password" element={<Teacher_ChangePassword />}/>
             <Route path="/teacher-detail/:teacher_id" element={<TeacherDetails />}/>
             <Route path="/latest-courses" element={<LatestCourses />}/>
             <Route path="/popular-courses" element={<PopularCourses />}/>
             <Route path="/popular-teachers" element={<PopularTeachers />}/>
         </Switch>
           <Footer />
          </div>
        )
}
export default App