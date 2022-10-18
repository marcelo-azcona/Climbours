import React from 'react';

import BookForm from './BookForm';
import './BookingSection.scss';

const BookingSection = () => {
  return (
    <section className="section-booking">
      <div className="booking-container">
        <div className="book">
          <BookForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
