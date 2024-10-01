import React from 'react';

function Show({ date, venue, location, cover }) {
  return (
    <article className='service'>
      <div className='service-info'>
        <h4 className='service-title'>{date}</h4>
        <h5 className='service-text'>{venue}</h5>
        <h5 className='service-text'>{location}</h5>
        <p>{cover}</p>
      </div>
    </article>
  );
}

export default Show;
