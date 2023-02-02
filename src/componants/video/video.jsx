import React from 'react'
import './video.css';
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
  return (
    <>
      <div className="video_div">
        <div className="video_thumbnail">
          <img src="https://avatars.mds.yandex.net/i?id=2fe110f69cda6c555f8df768f5e926c8f50a1bbf-8392048-images-thumbs&n=13&exp=1" alt="thumbnail" />
          <span className='video-duration'>06:26</span>
        </div>
        <div className="video_title">Dummy title Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error cumque enim a unde sunt, ad consequatur vitae consectetur repellat veniam incidunt ab natus nemo mollitia quisquam quidem blanditiis voluptates sequi eius? Cum placeat assumenda ratione soluta nam vel, eligendi corrupti.</div>
        <div className="video_details">
          <AiFillEye />
          <span> 5m views • 5 days ago </span>
        </div>
        <div className="video_channel">
          <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="channel pp" />
          <span>Shubham Pal</span>
        </div>
      </div>
    </>
  )
}

export default Video;