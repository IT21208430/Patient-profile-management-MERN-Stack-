import React from 'react';
import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import './index.css'

const RoomPage = () => {
 
     const { roomID} =useParams();
      const meeTing = async (element) =>{
         const appID =459131059;
         const serverSecret ="07a000af0af0f6e1a34e7e7403bd9e6d ";
         const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"tharaka"); 
         const zc = ZegoUIKitPrebuilt.create(kitToken);
         zc.joinRoom({container : element,
            sharedLinks:[{name:'copy link',
        url:`http://localhost:3000/room/${roomID}`}],
            scenario:{
             mode: <ZegoUIKitPrebuilt.OneONoneCall className="sh">share</ZegoUIKitPrebuilt.OneONoneCall>,
         },
         showScreenSharingButton: false,
     });

     } ;      
 
     return(
         <div>
             <div ref={meeTing} className='meetingview'/>
         </div>
     )
}

export default RoomPage;