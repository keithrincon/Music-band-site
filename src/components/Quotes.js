import React from 'react';
import Booking from './Booking.js';

const Quotes = () => {
  return (
    <section className='quotes-section'>
      <div className='quotes-content'>
        <h2>Request a Quote</h2>
        <p>
          If you're interested in booking us for an event, please fill out the
          form below, and we'll get back to you with a cost estimate!
        </p>
      </div>
      <Booking />
    </section>
  );
};

export default Quotes;
