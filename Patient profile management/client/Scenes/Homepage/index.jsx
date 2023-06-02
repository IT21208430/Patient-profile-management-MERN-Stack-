import React from 'react'
import Navbar from '../../components/navbar';
import Footer from "../../components/footer";
import './index.css';
import { Link } from 'react-router-dom';

function Homepage() {
    return (

        <>
        <div className="App">
            <Navbar/>
            <hr></hr>
            <section id="hero">
    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{"backgroundImage": "url(assets/img/slide/slide-1.jpg)"}}>
          <div className="container" style={{marginTop:'200px'}}>
            <h2>" ආරෝග්‍යා පරමා <span> ලාභා "</span></h2>
            <p>"Embrace the power of technology, where healthcare management meets convenience, efficiency, and personalized care."</p>
           <Link to='/profile+login'> <a href="#about" className="btn-get-started scrollto">Read More</a></Link>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section>
        
        <div class="card  text-white" style={{backgroundColor:'#3fbbc0',height:'70px'}}>
            <div style={{marginBottom:'60px'}}>
           <marquee width="100%" direction="right" height="40px" >
                <h3 style={{marginBottom:'70px'}}>AROGYA HOSPITAL - TISSAMAHARAMA (24 hours Service)
                    
                </h3>
           </marquee>
           </div>
  </div>
</div>
        
            <Footer/>
        
    </>
    ) 
}

export default Homepage;