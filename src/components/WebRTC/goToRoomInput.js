import React, { useState } from 'react'
import shortId from 'shortid'
import {withRouter} from 'react-router-dom';

const goToRoom = (history, roomId) => {
  history.push(`/liveroom/${roomId}`)
}

const GoToRoomInput = ({history}) => {
  const [roomId, setRoomId] = useState(shortId.generate());

  return (<div className="enter-room-container">
    <form>
          <input type="text" value={roomId} placeholder="Room id" onChange={(event) => {
            setRoomId(event.target.value)
          }}/>
          <button onClick={() => {
            goToRoom(history, roomId)
          }}>Enter</button>
          </form>
        </div>)
}

export default withRouter(GoToRoomInput);