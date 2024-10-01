import { useState } from 'react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDetails: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmissionStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        setSubmissionStatus('Quote request submitted successfully!');
        setFormData({ name: '', email: '', eventDetails: '' });
      } else {
        // Handle errors
        setSubmissionStatus('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      setSubmissionStatus(
        'An error occurred while submitting. Please try again later.'
      );
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <section className='quotes-section'>
      <div className='quotes-content'>
        <h2>Request a Quote</h2>
        <p>
          If you're interested in booking us for an event, please fill out the
          form below, and we'll get back to you with a cost estimate!
        </p>
        {submissionStatus && (
          <p className='submission-status'>{submissionStatus}</p>
        )}{' '}
        {/* Display status message */}
        <form className='quote-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor='event-details'>Event Details</label>
          <textarea
            id='event-details'
            name='eventDetails'
            value={formData.eventDetails}
            onChange={handleChange}
            required
          ></textarea>

          <button className='btn' type='submit' disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
