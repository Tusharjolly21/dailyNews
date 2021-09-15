import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1591292082066-0e20e80284a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwbmV3c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" height="700" width="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Welcome to Daily News</h5>
        <p>Here on our website you will find lastest everyday news </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" height="700" width="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>From Entertainment to Sports</h5>
        <p>You will find everything just with a click </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1529243856184-fd5465488984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80" height="700" width="500" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Everything is catergorise here</h5>
        <p>It's very easy to use</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<h1 className="text-center my-4" >Developed by Tushar Jolly</h1>
            </div>
                
        )
    }
}

export default About
