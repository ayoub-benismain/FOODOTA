import React from 'react';
import Links from '../components/navigation/Links';
import Button from '../components/navigation/Button';

import SearchField from '../components/home/SearchField';
import homeLOGO from '../assets/homeLOGO.png'; // Ensure the image is imported correctly
import ResturantsImages from '../components/home/ResturantsImages';
import TopFood from '../components/topfood/TopFood';

function Home() {
  return (
    <div className='lg:w-1/2 w-screen flex flex-col justify-center items-center absolute top-20 lg:p-15 p-10'>
      <img src={homeLOGO} alt="Food delivery logo" className='lg:my-5 my-1' />
      <h1 className='lg:text-5xl text-3xl my-5 font-extrabold text-gray-100 lg:tracking-wider'>
        Order Healthy and Fresh Food Any Time
      </h1>
      <p className='lg:text-xl text-base lg:my-8 my-5 text-gray-100'>
        Tunisian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.
      </p>
      <SearchField />
      <p className='text-xl px-2'>Popular Restaurants</p>
      <ResturantsImages />
      <TopFood />
    </div>
  );
}

export default Home;
