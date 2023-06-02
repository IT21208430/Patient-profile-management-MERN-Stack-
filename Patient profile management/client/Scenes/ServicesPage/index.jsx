import React,{useState} from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './index.css'
import './searchBar.css'

function ServicesPage() {

    const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  
    return(
         <>
         <div><Navbar/></div>
         <hr></hr>
         <div className='service'>
         <div className='container-fluid mx-auto mt-5 mb-5 col-12' style={{"textAlign":"center"}}>
    <div className="hd"><h1>OUR SERVICES</h1></div>
    <p><small className="text-muted">Always render more and better service than <br />is expected of you.........</small></p>

   
{/* 
            <div class="search" style={{marginBottom:'10px'}}>
            <i class="fa fa-search"></i>
            <input type="text" class="form-control" placeholder="Have a question? Ask Now"  onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery}/>
            <button class="btn btn-primary">Search</button>
            </div> */}
            



    <div className="row" style={{"justify-content":"center",marginTop:'20px'}}>
        
        <div className="card col-md-3 col-12" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content">
                <div className="card-body">  <img class="img" src="assets/img/services/drugstore.png" />
                    <div className="shadow"></div>
                    <div className="card-title"> Pharmacy services</div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">"Pharmacy services play a critical role in promoting optimal medication use and improving patient outcomes, ensuring the safe and effective use of medications within a comprehensive healthcare management system."</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content">
                <div className="card-body"> <img class="img" src="assets/img/services/lab.png" />
                    <div className="card-title"> Laboratary services </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> "Laboratory services are essential for accurate diagnosis, treatment, and prevention of diseases. They play a critical role in supporting clinical decision-making and improving patient outcomes within a comprehensive healthcare management system." </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content">
                <div className="card-body"> <img class="img" src="assets/img/services/ambulance.png" />
                    <div className="card-title"> Ambulance services </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">"Ambulance services are an integral part of emergency care, providing timely and efficient transport of patients to the appropriate healthcare facility. They play a critical role in improving patient outcomes and reducing morbidity and mortality within a comprehensive healthcare management system."</small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content" >
                <div className="card-body"><img class="img" src="assets/img/services/echanell.png" />
                    <div className="card-title"> E -Channelling services </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">"Efficient e-channelling services enable patients to access the right healthcare providers, at the right time and place, enhancing access to care and improving the patient experience within a comprehensive healthcare management system." </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content">
                <div className="card-body"><img class="img" src="assets/img/services/chat.png" />
                    <div className="card-title"> Chatting portal </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted">"Efficient chatting portal services enable patients to connect with healthcare providers in real-time, facilitating access to care, enhancing patient engagement and improving patient outcomes within a comprehensive healthcare management system." </small> </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="card col-md-3 col-12 ml-2" style={{"marginTop":"40px" ,"marginRight":"10px"}}>
            <div className="card-content">
                <div className="card-body"><img class="img" src="assets/img/services/video.png" />
                    <div className="card-title"> Video conference </div>
                    <div className="card-subtitle">
                        <p> <small className="text-muted"> "Video conference services provide a secure and convenient platform for patients and healthcare providers to connect remotely, improving access to care, reducing costs, and enhancing patient engagement within a comprehensive healthcare management system." </small> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
         </div>

     <ul>
        {filteredServices.map((service) => (
          <li key={service.id}>{service.title}</li>
        ))}
    </ul>
        
         <div className='footer'><Footer/></div>
         </>

    )

}

export default ServicesPage