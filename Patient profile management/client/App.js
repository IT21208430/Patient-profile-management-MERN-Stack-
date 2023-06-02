import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Loginpage from './scenes/Loginpage'
import Homepage from './scenes/Homepage'
import AmbulanceDashboard from './scenes/AmbulanceDashboard'
import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import InventoryDashboard from './scenes/InventoryDashboard'
import LaboratoryDashboard from './scenes/LaboratoryDashboard/PrescriptionDetails'
import PharmacyDashboard from './scenes/PharmacyDashboard'
import ProfilePage from './scenes/ProfilePage'
import WardManagerDashboard from './scenes/WardManagerDashboard'
import ServicesPage from './scenes/ServicesPage'
import VideoRequestForm from './scenes/VideoRequestForm'
import RoomPage from './scenes/VideoRoom'
import VideoUI from './scenes/VideoConference'
import AmbulanceHome from './scenes/AmbulanceDashboard/AmbulanceHome'
import Registration from './scenes/RegistrationPage/registration'
import Labreport from './scenes/LaboratoryDashboard/labReport'
import ReportGenerate from './scenes/LaboratoryDashboard/reportGenerate'
import ReportEmail from './scenes/LaboratoryDashboard/emailReport'
import MyComponent from './scenes/testing/testing'
import react, { useState } from 'react'
import DeleteAccount from './scenes/DeleteAccount/deleteProfile'
import ReportPage from './scenes/ReportGenerate'
import NotificationPage from './components/notify'
import Doctors from './components/doctors'
// import UpdateProfile from './scenes/updateProfile'
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Homepage />} />
                    <Route path='/profile+login' element={<Loginpage/>}/>
                    <Route path='/AmbulanceDashboard' element={<AmbulanceHome />} />
                    <Route path='/EmployeeManagerDashboard' element={<EmployeeManagerDashboard />} />
                    <Route path='/InventoryDashboard' element={<InventoryDashboard />} />
                    <Route path='/LaboratoryDashboard/presdetails' element={<LaboratoryDashboard />} />
                    <Route path='/PharmacyDashboard' element={<PharmacyDashboard />} />
                    <Route path='/ProfilePage/:EmailAddress' element={<ProfilePage />} />
                    <Route path='/WardManagerDashboard' element={<WardManagerDashboard />} />
                    <Route path='/ServicesPage' element={<ServicesPage/>}/>
                    <Route path='/VideoRequestForm' element={<VideoRequestForm/>}/>
                    <Route path='/VideoUI' element={<VideoUI/>}/>
                    <Route path='/room/:roomID' element={<RoomPage/>}/>
                    <Route path='/RegistrationPage' element={<Registration/>}/>
                    <Route path='/LaboratoryDashboard/labReport' element={<Labreport/>}/>
                    <Route path='/LaboratoryDashboard/reportGenerate' element={<ReportGenerate/>}/>
                    <Route path='/LaboratoryDashboard/reportEmail' element={<ReportEmail/>}/>
                    <Route path='/test' element={<MyComponent/>}/>
                    <Route path='/deleteAccount' element={<DeleteAccount/>}/>
                    <Route path='/reportGenerate' element={<ReportPage/>}/>
                    <Route path='/notify' element={<NotificationPage/>}/>
                    <Route path='/Doctors' element={<Doctors/>}/>

                </Routes>
            </BrowserRouter>            
        </div>
    );
}

export default App;

//Tharaka source code
// import Navbar from "./components/navbar";
// import Home  from "./components/home";
// import Footer from "./components/footer";
// import Loginpage from "./scenes/Loginpage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routers>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//       </Routers>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
