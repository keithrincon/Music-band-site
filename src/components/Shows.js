import React from 'react';
import Title from './Title';
import { shows } from '../data';
import Show from './Show';

function Shows() {
  return (
    <section className='section services' id='shows'>
      {/* <Title title='our' subTitle='shows' /> */}
      <Title subTitle='shows' />
      <div className='section-center services-center'>
        {shows.map((show) => {
          return <Show key={show.id} {...show} />;
        })}
      </div>
    </section>
  );
}

export default Shows;
