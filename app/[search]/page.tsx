/* eslint-disable @next/next/no-async-client-component */
 "use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter, useSearchParams } from 'next/navigation';
import { format } from "date-fns"
import getSearch from '../libs/getSearch';
import InfoCard from '@/components/InfoCard';
// import { useEffect, useState } from 'react';



export default  async function Search() {
  const searchParams = useSearchParams();

  const searchData = await getSearch()

  // console.log(searchData);
  
  const { location, noOfGuests, startDate, endDate } = Object.fromEntries(searchParams);
  // console.log(location);


  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");


  const range = `${formattedStartDate} -  ${formattedEndDate} `


  return (
    <div>
        <Header placeHolder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range}- for  {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
               
               <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                  <p className='button'>Cancellation Flexibility</p>
                  <p className='button'>Type of Place</p>
                  <p className='button'>Price</p>
                  <p className='button'>Rooms & Beds</p>
                  <p className='button'>More Filters</p>
              
               </div>
            
            <div className='flex flex-col'>
            {searchData?.map((item:any) => (
              <InfoCard
                 key={item.img}
                 img={item.img}
                 location={item.location}
                 title={item.title}
                 description={item.description}
                 star={item.star}
                 price={item.price}
                 total={item.total}
                 />

            ))}
            </div>
            
            </section>
        </main>
        <Footer/>
    </div>
  )
}

