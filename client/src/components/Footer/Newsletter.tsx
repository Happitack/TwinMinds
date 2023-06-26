
import React, { FC, useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubscription = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSuccess('');

    const response = await fetch('http://localhost:3001/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || 'Could not subscribe. Please try again.');
    } else {
      setSuccess(data.message);
    }
  };

  return (
    <div className="app__newsletter" id="newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className="custom__button" onClick={handleSubscription}>
          Subscribe
        </button>
      </div>
        {error && <div className="app__newsletter_errormsg">{error}</div>}
        {success && <div className="app__newsletter_successmsg">{success}</div>}
    </div>
  );
};

export default Newsletter;