import React from 'react';
import HeadingSecondary from '../Headings/HeadingSecondary';
import Button from '../UI/Button';
import './BookForm.scss';

const BookForm = () => {
  return (
    <div className="book__form">
      <form action="#" className="form">
        <HeadingSecondary className="">Start to travel!</HeadingSecondary>

        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Full Name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
            Full Name
          </label>
        </div>

        <div className="form__group">
          <input
            type="email"
            className="form__input"
            placeholder="E-mail"
            id="email"
            required
          />
          <label htmlFor="email" className="form__label">
            Email adress
          </label>
        </div>

        <div className="form__group-choice u-margin-top-medium">
          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="small-tours"
              name="size"
            />
            <label htmlFor="small-tours" className="form__radio-label">
              <span className="form__radio-button"></span>
              Small tour group
            </label>
          </div>

          <div className="form__radio-group">
            <input
              type="radio"
              className="form__radio-input"
              id="big-tours"
              name="size"
            />
            <label htmlFor="big-tours" className="form__radio-label">
              <span className="form__radio-button"></span>
              Big tour group
            </label>
          </div>
        </div>

        <div className="form__group-button">
          <Button type="submit" className="btn btn--green u-margin-top-medium">
            Book now!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
