import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Footer from './footer';
import './notify.css'

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/auth/notifications');
      const data = response.data;
      setNotifications(data);
    } catch (error) {
      console.error('Failed to fetch notifications', error);
    }
  };

  return (
    // <div>
    //   <h2>Notifications</h2>
    //   {notifications.map((notification) => (
    //     <div key={notification._id}>
    //       <h4>{notification.title}</h4>
    //       <p>{notification.description}</p>
    //       <p>{notification.createdAt}</p>
    //     </div>
    //   ))}
    // </div>
  <>
    <Navbar/>

    <hr style={{height:'100px'}}></hr>
    
    <section class="section-50">
    <div class="container">
        <h3 class="m-b-50 heading-line"> Notifications <i class="fa fa-bell text-muted"></i></h3>

        <div class="notification-ui_dd-content">
            <div class="notification-list notification-list--unread">
                <div class="notification-list_content">
                    <div class="notification-list_img">
                        <img src="assets/img/log.png" alt="user"/>
                    </div>
                    <div class="notification-list_detail" style={{marginTop:'20px'}}>
                    {notifications.map((notification) => (
                           <div key={notification._id} style={{ marginBottom: '20px' }}>
                        <p><b>{notification.title}</b></p>
                        <p class="text-muted">{notification.description}</p>
                        <p class="text-muted"><small>{notification.createdAt}</small></p>
                        <div class="notification-list_feature-img">
                    <img src="assets/img/log.png" alt="Feature image"/>
                   </div>

                        </div>

                    ))}
                    </div>
                </div>
                </div>
                </div>
                </div>
                </section>

                <Footer/>

                </>

                
  );
}

export default NotificationPage;