import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    location: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Optionally reset the form or show a success message
        setFormData({
          name: '',
          email: '',
          date: '',
          location: '',
          details: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <h2>Booking Request</h2>

      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor='date'>Date:</label>
      <input
        type='date'
        id='date'
        name='date'
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor='location'>Location:</label>
      <input
        type='text'
        id='location'
        name='location'
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label htmlFor='details'>Additional Details:</label>
      <textarea
        id='details'
        name='details'
        value={formData.details}
        onChange={handleChange}
        required
      />

      <button type='submit'>Submit Request</button>
    </form>
  );
};

export default BookingForm;
