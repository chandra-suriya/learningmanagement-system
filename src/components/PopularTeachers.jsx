import React,{useState, useEffect} from "react";
import Card from "./Card.jsx";
import axios from "axios";

function PopularTeachers(){
    const baseurl = "http://127.0.0.1:8000/api";

    useEffect(()=>{
           axios.get(baseurl+'/teacher/').then((response)=>{
                console.log(response.data);
           });
    })


    return (
        <div className="container mt-3">
            <h3 className="pb-1">Popular Teachers </h3>
            <div className="row">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination  justify-content-center mt-5">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PopularTeachers;