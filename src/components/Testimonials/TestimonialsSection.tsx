import React from 'react';
import HeadingSecondary from '../Headings/HeadingSecondary';
import TestimonyCard from './TestimonyCard';
import Button from '../UI/Button';
import TestimonialVideo from './TestimonialsVideo';
import personImg1 from '../../assets/img/nat-8.jpg';
import personImg2 from '../../assets/img/nat-9.jpg';
import './TestimonialsSection.scss';

const testimonyData = [
  {
    src: personImg1,
    alt: 'Person on a tour',
    personName: 'Eliana Varela',
    heading: 'I had the best week ever!',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur commodi odio officiis impedit ipsa laboriosam iusto animi voluptatum deleniti rerum provident quaerat quas, nostrum culpa incidunt nemo qui voluptates repellat.',
    id: 1,
  },
  {
    src: personImg2,
    alt: 'Person checking the horizon',
    personName: 'Lucas Lopez',
    heading: 'A life-changing experience!',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur commodi odio officiis impedit ipsa laboriosam iusto animi voluptatum deleniti rerum provident quaerat quas, nostrum culpa incidunt nemo qui voluptates repellat.',
    id: 2,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-testimonials">
      <TestimonialVideo />

      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary className="">We make people happy!</HeadingSecondary>
      </div>
      <div className="container-testimonials">
        {testimonyData.map((testimony) => {
          return <TestimonyCard key={testimony.id} testimony={testimony} />;
        })}
      </div>

      <Button type="button" className="btn btn--text u-margin-top-big">
        Read all the stories &rarr;
      </Button>
    </section>
  );
};

export default TestimonialsSection;
