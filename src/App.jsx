import React  from "react";
import Home from "./components/Home";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import {Routes as Switch,Route} from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Dashboard from "./components/user/Dashboard";
import Mycourses from "./components/user/Mycourses";
import FavouriteCourse from "./components/user/FavouriteCourses";
import RecommendedCourse from "./components/user/Recommendedcourse";
import ProfileSetting from "./components/user/ProfileSetting";
import ChangePassword from "./components/user/ChangePassword";


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
         </Switch>
           <Footer />
          </div>
        )
}
export default App