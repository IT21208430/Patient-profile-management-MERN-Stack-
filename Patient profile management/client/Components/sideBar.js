import React from 'react'
import './sideBar.css'
//import Avatar from '../images/avatar.png'

function SideBar() {
    return (
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse" style={{backgroundColor:'lightblue',height:'850px'}}>
            <div class="position-sticky pt-3" >
              <div class="text-center mb-4">
                <img src="../assets/img/labdoctor.jpg" class="rounded-circle" height={200} />
                <h4 class="mt-2">John Doe</h4>
              </div>
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" style={{border:'2px solid black',borderRadius:'25px',marginTop:'18px' ,color:'white'}}><center>Dashboard</center></a>
                </li>
              </ul>
            </div>
          </nav>
      
         
      
    )
}

export default SideBar