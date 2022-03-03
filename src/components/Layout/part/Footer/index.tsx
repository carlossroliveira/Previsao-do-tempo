// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import Slider from 'react-slick';

// -------------------------------------------------
// Components
// -------------------------------------------------
import image01 from '../../../assets/none.png';
import image02 from '../../../assets/ntwo.png';
import image03 from '../../../assets/nthree.png';
import image04 from '../../../assets/sone.png';
import image05 from '../../../assets/stwo.png';
import image06 from '../../../assets/sthree.png';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ContainerSC, SubContainerSC, DivSC, ImgSC } from './footerStyles';
// -------------------------------------------------
// Types
// -------------------------------------------------

export const Footer = (): JSX.Element => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ContainerSC>
      <SubContainerSC>
        <Slider {...settings}>
          <DivSC>
            <ImgSC src={image01} alt="Nuvem com chuva" />
          </DivSC>
          <DivSC>
            <ImgSC src={image04} alt="Sol" />
          </DivSC>
          <DivSC>
            <ImgSC src={image03} alt="Nuvem com chuva e raio" />
          </DivSC>
          <DivSC>
            <ImgSC src={image05} alt="Sol com nuvem" />
          </DivSC>
          <DivSC>
            <ImgSC src={image02} alt="Nuvem" />
          </DivSC>
          <DivSC>
            <ImgSC src={image06} alt="Sol com numvem e raio" />
          </DivSC>
        </Slider>
      </SubContainerSC>
    </ContainerSC>
  );
};
