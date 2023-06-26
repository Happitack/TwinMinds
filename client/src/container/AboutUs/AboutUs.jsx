import React from 'react';

import { images } from '../../constants';
import './AboutUs.scss';

const AboutUs = () => (
  <div className="app__aboutus app__bg_anim flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
  </div>
);

export default AboutUs;