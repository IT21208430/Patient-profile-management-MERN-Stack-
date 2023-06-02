import React,{useState,useEffect} from 'react';
import './notificationbar.css';
import './notification.js';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NotificationPage from './notify';


function NotificationBar() {
    function handleLogout() {
      const confirmLogout = window.confirm("Are you sure you want to logout?");
      if (confirmLogout) {
        window.location.href = 'http://localhost:3000/home';
      }
    }
  
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);
    
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth/notifications');
        const data = response.data;
        setNotifications(data);
        setNotificationCount(data.length);
      } catch (error) {
        console.error('Failed to fetch notifications', error);
      }
    };

    const handleBellIconClick = () => {
        // Fetch the notifications
        fetchNotifications();
      
        // Reset the notification count to zero
        setNotificationCount(0);
      };
    
    useEffect(() => {
      fetchNotifications();
    }, []);
    
  
    return (
        <navBar>
        <div className="logo"> WELCOME TO THE PROFILE </div>
        <div className="icon" id="bell">
            <Link to={'/notify'}>
          <img
            src="assets/img/notification.png"
            alt=""
            style={{ marginLeft: "100px" }}
            onClick={handleBellIconClick}
          />
          {notifications.length > 0 && (
             <span className="notification-badge">{notifications.length}</span>
           )}
          </Link>
        </div>
        <div className='logout'>
          <button
            onClick={handleLogout}
            style={{
              marginRight: "50px",
              height: "40px",
              paddingBottom: "20px",
              backgroundColor: "black",
              color: "white"
            }}
          >
            Log out
          </button>
        </div>
        </navBar>
    );
  }
  
  export default NotificationBar;