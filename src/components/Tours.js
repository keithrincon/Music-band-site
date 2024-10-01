import React from 'react';
import Title from './Title';
import { bts } from '../data';
import Bts from './Bts';

function Tours() {
  return (
    <section className='section' id='bts'>
      {/* <Title title='featured' subTitle='tours' /> */}
      <Title title='BTS' />
      <div className='section-center featured-center'>
        {bts.map((bts) => {
          return <Bts key={bts.id} {...bts} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
