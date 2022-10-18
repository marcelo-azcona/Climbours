import React from 'react';
import HeadingSecondary from '../Headings/HeadingSecondary';
import Button from '../UI/Button';
import ToursCard from './ToursCard';
import './ToursSection.scss';

const toursData = [
  {
    price: '$299',
    heading: 'The Sea Voyage',
    id: 1,
    tour_details: {
      duration: '3 day tour',
      capacity: 'Up to 30 people',
      guides: '2 tour guides',
      rest: 'Sleep in cozy hotel',
      difficulty: 'Difficulty: Easy',
    },
  },
  {
    price: '$399',
    heading: 'The Forest Hike',
    id: 2,
    tour_details: {
      duration: '3 day tour',
      capacity: 'Up to 30 people',
      guides: '2 tour guides',
      rest: 'Sleep in cozy hotel',
      difficulty: 'Difficulty: Moderate',
    },
  },
  {
    price: '$499',
    heading: 'Snowy Adventure',
    id: 3,
    tour_details: {
      duration: '3 day tour',
      capacity: 'Up to 30 people',
      guides: '2 tour guides',
      rest: 'Sleep in cozy hotel',
      difficulty: 'Difficulty: Hard',
    },
  },
];

const ToursSection = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary className="">Our most popular tours</HeadingSecondary>
      </div>

      <div className="container__tours">
        {toursData.map((tour) => {
          return <ToursCard key={tour.id} {...tour} />;
        })}
      </div>

      <Button type="button" className="btn btn--green u-margin-top-big">
        Discover all tours!
      </Button>
    </section>
  );
};

export default ToursSection;
