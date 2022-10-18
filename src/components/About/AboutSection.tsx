import React from 'react';
import Recommendation from './Recommendation';
import Composition from './Composition';
import HeadingSecondary from '../Headings/HeadingSecondary';
import photo1 from '../../assets/img/nat-1-large.jpg';
import photo2 from '../../assets/img/nat-2-large.jpg';
import photo3 from '../../assets/img/nat-3-large.jpg';
import './AboutSection.scss';
import './Composition.scss';

const recommendationData = [
  {
    title: "You're a going to fall in love with the world",
    paragraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
sapiente consequatur ad quo, repellat eum rerum quisquam iure est ullam?
Esse consectetur possimus perspiciatis quae molestias quas nulla cumque
natus.`,
  },
  {
    title: "You're a going to fall in love with the world",
    paragraph: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
sapiente consequatur ad quo, repellat eum rerum quisquam iure est ullam?
Esse consectetur possimus perspiciatis quae molestias quas nulla cumque
natus.`,
  },
];

const compositionData = [
  { src: photo1, alt: 'Nature 1', id: 1 },
  { src: photo2, alt: 'Nature 2', id: 2 },
  { src: photo3, alt: 'Nature 3', id: 3 },
];

const AboutSection = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <HeadingSecondary className="">
          Incredible tours to live the adventure!
        </HeadingSecondary>
      </div>

      <div className="grid-about">
        <div>
          <Recommendation
            title={recommendationData[0].title}
            paragraph={recommendationData[0].paragraph}
          />
          <Recommendation
            title={recommendationData[1].title}
            paragraph={recommendationData[1].paragraph}
          />
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div>
          <div className="composition">
            {compositionData.map((composition) => {
              return (
                <Composition
                  key={composition.id}
                  src={composition.src}
                  alt={composition.alt}
                  id={composition.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
