import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId }=useParams();

  const myMeeting=async(element)=>{
    const appID=191027189;
    const serverSecret="eca3313088cbab374ade1cbdb2fd489f";
    const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'Himalaya'
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container:element,
      scenario:{
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className='room'>
      <div ref={myMeeting}/>
    </div>
  )
}

export default Room
