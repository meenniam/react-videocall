import React from 'react'
import {Switch,Route} from 'react-router-dom';
import Video from './WebRTC/video'
import GotoRoomInput from './WebRTC/goToRoomInput'

const main = () => (
    <Switch>
        <Route exact path="/" component={GotoRoomInput}/>
        <Route exact path="/liveroom/:roomId" component={Video}/>
    </Switch>
);


export default main;