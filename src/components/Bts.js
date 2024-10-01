import React from 'react';

function Bts({ video }) {
  return (
    <article className='bts-card'>
      <div className='bts-video-container'>
        {/* Render the video directly */}
        <video className='bts-video' width='600' controls autoPlay muted loop>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </article>
  );
}

export default Bts;
