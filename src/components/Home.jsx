import React from "react";
import Card from "./Card";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container mt-4">
                <h3 className="pb-1 mb-3">Latest Courses <Link to="/latest-courses" className="float-end">See all</Link></h3>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <h3 className="pb-1 mb-3 mt-4">Popular Courses<Link to="/popular-courses" className="float-end">See all</Link></h3>
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <h3 className="pb-1 mb-3 mt-4">Popular Teachers<Link to="/popular-teachers" className="float-end">See all</Link></h3> 
                <div className="row">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="container mt-4">
            <h3 className="pb-1 mb-3 mt-4">Student Testinomials</h3>
                <div id="carouselExampleIndicators" className="carousel slide bg-primary text-white py-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="text-center">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="text-center">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="text-center">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}
export default Home;