import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
           <h5 className='font-bold'>ABOUT</h5>
           <p>How Airbnb Works</p>
           <p>Newsroom</p>
           <p>Investors</p>
           <p>Airbnb Plus</p>
           <p>Airbnb Luxe</p>
        </div>


        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>GetArryays</p>
        </div>


        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Get Arrays</p>
            <p>Presents</p>
             <p>Zero to Fullstacks Hero</p>
             <p>Hundred Students</p>
             <p>Join Now</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Get Arrays</p>
            <p>Trust & Safety</p>
             <p>Say Hi</p>
             <p>Easter Eggs</p>
             <p>For the win</p>
        </div>
    </div>
  )
}

export default Footer