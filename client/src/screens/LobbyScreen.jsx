import { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider'
import { useNavigate } from 'react-router-dom'

function LobbyScreen() {

    const [email, setEmail] = useState('')
    const [roomId, setRoom] = useState('')
    const socket = useSocket()

    const navigate = useNavigate()

    const handleSubmitForm = useCallback((e) => {
        e.preventDefault()
        console.log(email, roomId);
        socket.emit('room:join', { email, roomId })
    }, [email, roomId, socket])

    const handleJoinRoom = useCallback(
        (data) => {
          // eslint-disable-next-line no-unused-vars
          const { email, roomId } = data;
          console.log("DATA FROM BACKEND",email,roomId);
          navigate(`/room/${roomId}`);
        },
        [navigate]
      );
    
      useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
          socket.off("room:join", handleJoinRoom);
        };
      }, [socket, handleJoinRoom]);

    return (
        <div>
            <h1>
                Lobby Screen
            </h1>

            <form onSubmit={handleSubmitForm}>
                <label htmlFor="email">Email ID </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />
                <label htmlFor="room">Room ID </label>
                <input type="text" id='room' value={roomId} onChange={(e) => setRoom(e.target.value)} />
                <br /><br />
                <button >
                    Join
                </button>
            </form>
        </div>
    )
}

export default LobbyScreen