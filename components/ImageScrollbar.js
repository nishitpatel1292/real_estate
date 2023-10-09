import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '@/components/component.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Box } from '@chakra-ui/react';


export default function HorizontalScrollbar({ data }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings} className={styles.slider} >
                {data.map((item) => (
                    <div key={item.id} className={styles.slideImageContainer}>
                        <Image
                            placeholder="blur"
                            blurDataURL={item.url}
                            src={item.url}
                            width={300}
                            height={200}
                            alt='House images'
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
