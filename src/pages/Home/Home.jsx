import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomCode, setRoomCode]=useState("");
    const navigate=useNavigate();

    const handleFormSubmit=(ev)=>{
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    };

  return (
    <div className='home'>
        <form onSubmit={handleFormSubmit} className='form'>
            <div className='values'>
                <label>Enter Room Code</label>
                <input 
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)} 
                type="text" 
                required 
                placeholder='Enter Room Code'></input>
            </div>
            <button type="submit">Enter Room</button>
        </form>
    </div>
  )
}

export default Home
