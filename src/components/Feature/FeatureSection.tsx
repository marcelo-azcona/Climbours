import React from 'react';
import FeatureBox from './FeatureBox';
import { GiWorld, GiCompass, GiTreasureMap, GiHearts } from 'react-icons/gi';
import './FeatureSection.scss';

type FeaturedType = {
  icon: JSX.Element;
  heading: string;
  text: string;
  id: number;
};

const featureData: FeaturedType[] = [
  {
    icon: <GiWorld />,
    heading: 'Explore the world!',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et unde tenetur debitis, eligendi magnam molestias iusto iure fugiat officia dolorum ab deleniti sed voluptate dicta expedita soluta sequi fugit.',
    id: 1,
  },
  {
    icon: <GiCompass />,
    heading: 'Meet nature',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id nihil dignissimos hic provident consectetur, repellat delectus enim corporis ex ipsum eius dolor quia itaque culpa ipsa incidunt amet dolorum!',
    id: 2,
  },
  {
    icon: <GiTreasureMap />,
    heading: 'Find your way',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nihil at assumenda accusamus quo vitae soluta sint necessitatibus architecto pariatur doloribus recusandae expedita, explicabo quibusdam ad mollitia laboriosam, ea perferendis!',
    id: 3,
  },
  {
    icon: <GiHearts />,
    heading: 'Live a healthier life ',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio facilis doloremque assumenda. Vero, voluptatibus tempora! Dolorum quos cupiditate maiores veniam illum alias omnis officia suscipit ea est numquam, a ullam.',
    id: 4,
  },
];

const FeatureSection = () => {
  return (
    <section className="section-feature">
      <div className="container-feature">
        {featureData.map((data) => {
          return (
            <FeatureBox
              key={data.id}
              icon={data.icon}
              heading={data.heading}
              text={data.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
