import React,{useState,useCallback} from 'react';
import {useNavigate} from 'react-router-dom'
const VideoUI = () =>{


    const [value,setValue] = useState();
    const navigate =useNavigate();
    const handleJoinRoom = useCallback(()=>{navigate(`/room/${value}`)} ,[navigate, value])
      

    return(
        <>
        <div class="mb-3">
        <input value={value} onChange={(e) => setValue(e.target.value)}   type='text'    class="form-control" placeholder='Enter Room ID'  />
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleJoinRoom}>Join the meeting</button>
      </>
    )

};
export default VideoUI;