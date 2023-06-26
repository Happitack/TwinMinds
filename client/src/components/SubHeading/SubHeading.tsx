import React, { FC } from 'react';
import './SubHeading.scss';

interface SubHeadingProps {
  title: string;
}

const SubHeading: FC<SubHeadingProps> = ({ title }) => (
  <div>
    <p className="p__subheading">{title}</p>
  </div>
);

export default SubHeading;