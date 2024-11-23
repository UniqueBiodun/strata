'use client';
import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  logo: string;
  message: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    logo: '../../../icons/flutterwave.svg',
    message:
      "Strata's data-led approach and deep expertise gave us the confidence to expand and diversify our carbon credit program. We could not have imagined this level of direction without their direction.",
    author: 'Olubayo Adekanmbi',
    role: 'Chief Transformation Officer',
  },
  {
    id: 2,
    logo: '../../../icons/flutterwave.svg',
    message:
      "Strata's data-led approach and deep expertise gave us the confidence to expand and diversify our carbon credit program. We could not have imagined this level of direction without their direction.",
    author: 'Olubayo Adekanmbi',
    role: 'Chief Transformation Officer',
  },
  {
    id: 3,
    logo: '../../../icons/flutterwave.svg',
    message:
      "Strata's data-led approach and deep expertise gave us the confidence to expand and diversify our carbon credit program. We could not have imagined this level of direction without their direction.",
    author: 'Olubayo Adekanmbi',
    role: 'Chief Transformation Officer',
  },
  {
    id: 4,
    logo: '../../../icons/flutterwave.svg',
    message:
      "Strata's data-led approach and deep expertise gave us the confidence to expand and diversify our carbon credit program. We could not have imagined this level of direction without their direction.",
    author: 'Olubayo Adekanmbi',
    role: 'Chief Transformation Officer',
  },
  {
    id: 5,
    logo: '../../../icons/flutterwave.svg',
    message:
      "Strata's data-led approach and deep expertise gave us the confidence to expand and diversify our carbon credit program. We could not have imagined this level of direction without their direction.",
    author: 'Olubayo Adekanmbi',
    role: 'Chief Transformation Officer',
  },
  // Add more testimonials if necessary
];

export default function TestimonialCarousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className='container max-w-full py-24'>
      <div className='lg:pl-[6.5rem] lg:flex lg:flex-row flex-col lg:gap-[6.5rem] space-y-16 lg:space-y-0'>
        {/* Left Shape */}
        <div className='bg-button-bg w-full h-[30rem] rounded-[200px_16px_16px_16px]'></div>

        {/* Testimonial Section */}
        <div className='bg-white lg:flex lg:flex-row flex-col lg:gap-10 space-y-8 lg:space-y-0'>
          {/* Main Testimonial Block */}
          <div className='flex flex-col justify-between space-y-10 lg:space-y-0'>
            {/* Logo */}
            <div className=''>
              <Image
                src={testimonials[currentSlide].logo}
                alt='Logo'
                width={202.37}
                height={32}
                className='h-auto'
              />
            </div>

            {/* Testimonial Message */}
            <p className='text-3xl font-semibold text-primary-100'>
              {testimonials[currentSlide].message}
            </p>

            {/* Author Information */}
            <div className=''>
              <p className='font-medium text-primary-100 text-xl'>
                {testimonials[currentSlide].author}
              </p>
              <p className='font-medium text-lg text-primary-200'>
                {testimonials[currentSlide].role}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className='flex justify-start items-center gap-2'>
              {testimonials.map((_, index) => (
                <svg
                  key={index}
                  width='21'
                  height='14'
                  viewBox='0 0 21 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`cursor-pointer transition-opacity duration-300 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setCurrentSlide(index)} // Navigate to the clicked dot's slide
                >
                  <path
                    d='M20.0001 5.87509C20.9376 11.1876 11.0251 14.0051 7.1032 14.0051C3.18129 14.0051 0.00195312 10.8967 0.00195312 7.06233C0.00196816 5.17245 0.235813 0.263672 7.32321 0.263672C10.5325 0.263672 19.1045 0.799633 20.0001 5.87509Z'
                    fill={index === currentSlide ? '#0C6291' : '#B6D0DE'}
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div>
            <button
              onClick={nextSlide}
              className='w-[73px] h-[51px] flex justify-center items-center'
              aria-label='Next Slide'
            >
              <svg
                width='73'
                height='51'
                viewBox='0 0 73 51'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.997803 21.0024C-2.3772 40.1274 33.3078 50.2705 47.4267 50.2705C61.5456 50.2705 72.9912 39.0803 72.9912 25.2764C72.9912 18.4729 72.1493 0.801268 46.6347 0.80127C35.0811 0.80127 4.22221 2.73073 0.997803 21.0024Z'
                  fill='#0C6291'
                />
                <path
                  d='M48.3074 27.0759L39.8699 35.5134C39.6057 35.7776 39.2474 35.926 38.8738 35.926C38.5002 35.926 38.1419 35.7776 37.8777 35.5134C37.6136 35.2492 37.4651 34.8909 37.4651 34.5173C37.4651 34.1437 37.6136 33.7854 37.8777 33.5212L43.9141 27.4872H26.6875C26.3145 27.4872 25.9569 27.339 25.6931 27.0753C25.4294 26.8116 25.2812 26.4539 25.2812 26.081C25.2812 25.708 25.4294 25.3503 25.6931 25.0866C25.9569 24.8229 26.3145 24.6747 26.6875 24.6747H43.9141L37.8801 18.6372C37.6159 18.373 37.4675 18.0147 37.4675 17.6411C37.4675 17.2675 37.6159 16.9092 37.8801 16.645C38.1443 16.3808 38.5026 16.2324 38.8762 16.2324C39.2498 16.2324 39.6081 16.3808 39.8723 16.645L48.3098 25.0825C48.4409 25.2133 48.5449 25.3688 48.6158 25.5399C48.6866 25.711 48.723 25.8945 48.7228 26.0797C48.7226 26.2649 48.6858 26.4483 48.6145 26.6192C48.5432 26.7902 48.4389 26.9454 48.3074 27.0759Z'
                  fill='white'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
