import React  from "react";
import Home from "./components/Home";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import {Routes as Switch,Route} from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Register from "./components/user/Register";
import Login from "./components/user/Login";


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
         </Switch>
           <Footer />
          </div>
        )
}
export default App