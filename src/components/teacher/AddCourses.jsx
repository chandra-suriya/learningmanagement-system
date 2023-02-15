import React ,  {useState, useEffect}from "react";
import Teacher_Sidebar from "./Teacher_Sidebar";
//import userStore  from "../zustand_store/userStore";
import axios from "axios";
function AddCourse(){
    const baseurl = "http://127.0.0.1:8000/api";
    const [cate,setcate] = useState([]);
    const [course_data, setcourse_data] = useState({
        category: "",
        title: "",
        description: "",
        featured_img: "",
        techs: ""

    });
    const [respodata, setrespodata] = useState({});
   
    useEffect(()=>{
        try{
            axios.get(baseurl+"/categorylist/").then((res)=>{
                  setcate(res.data);
                })
        }
        catch(error){
            console.log(error); 
        }
    },[])
    const handlechange =(event)=>{
         console.log(course_data)
          setcourse_data({
            ...course_data,
             [event.target.name]:event.target.value
          })
    }

   const handleFile=(event)=>{
    console.log(course_data)
    setcourse_data({
        ...course_data,
        [event.target.name]:event.target.files[0]
    })
   }
   const submitForm = ()=>{
      console.log(course_data.category);
      const course_formData = new FormData();
      course_formData.append("title",course_data.title);
      course_formData.append("category",course_data.category);
      course_formData.append("teacher_id",2);
      course_formData.append("description",course_data.description);
      course_formData.append("featured_img",course_data.featured_img);
      course_formData.append("technologies", course_data.technologies);

      try {
        axios.post(baseurl+"/addcourse/",course_formData,{
        }).then((resp)=>{
               setrespodata(resp.data);
        })
      }
      catch(error){
         console.log(error)
      }
   }
    return (
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <Teacher_Sidebar />
            </aside>
            <section className="col-md-9">
            <div className="card">
                        <h5 className='card-header'> Add Course</h5>
                        <div className="card-body">
                            <div className="form-group mb-4">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input type="text" onChange={handlechange} className="form-control" name="title"  placeholder="Course Name" />
 
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="exampleInputEmail1">Category</label>
                                    <select name="category" onChange={handlechange} className="form-control">
                                        { 
                                             cate.sucess === true &&  
                                             cate.datas.map((category,index)=>{
                                                return(
                                                    <option key={index}>{category.title}</option>
                                                )
                                            })
                                             
                                        }
                                        {
                                            cate.sucess === false && <option>No Category is here</option>
                                        }
                                    </select>

                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea className="form-control"   onChange={handlechange}name="description" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" className="form-text text-muted">Ex python, java ...</small>
                                </div>
                                <div className="form-group mb-2">
                                    <label  className="pb-2">Featured Image</label>
                                    <input type="file"  onChange={handleFile} name="featured_img" className="form-control"  placeholder="Choose file"/>
                                </div>
                                <div className="form-group mb-4">
                                    <label for="exampleFormControlTextarea1">Technologies</label>
                                    <textarea className="form-control"  onChange={handlechange} name="technologies" placeholder="Interset" rows="3"></textarea>
                                    <small id="suggest" className="form-text text-muted">Ex python, java ...</small>
                                </div>
                                <hr/>
                                <button type="submit"  onClick={submitForm} className="btn btn-primary">Submit</button>
                                {respodata.success === true && <p className="text-success">Course Added sucessfully</p>}
                             {respodata.success=== false && <p className="text-danger">please enter the valid Data</p>}
                        </div>
                    </div>
            </section>
        </div>

    </div>
    )
}
export default AddCourse;