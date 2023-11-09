"use-client"

import Banner from "@/components/Banner"
import Footer from "@/components/Footer";
import Header from "@/components/Header"
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";


export default async function Home() {
 
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G', { cache: 'force-cache'});
  const data = await res.json();
  // console.log(data);


  const cards = await fetch('https://www.jsonkeeper.com/b/VHHT', { cache: 'force-cache'});
  const cardsData = await cards.json();
  // console.log(cardsData);
  


  
  

  return (
    <div className="">
      
     <Header/>
     <Banner />


     <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
       {data.map(({img,distance,location}:any )=> (
        // eslint-disable-next-line react/jsx-key
        <SmallCard
        key={img}
        img={img}
        distance={distance}
        location={location}
        />
       ))}
       </div> 
      </section>

      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
        
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
        {cardsData?.map(({ img, title}:any) => (
          <MediumCard key={img} img={img} title={title}/>
        ))}
        </div>
      </section>

      <LargeCard 
      img="https://links.papareact.com/4cj"
      title="The Greatest Outdoors"
      description="Whislist Curated by Airbnb."
      buttonText="Get Inspired"
      />
     </main>

     <Footer/>
    </div>
  )
}

//static rendering


// export async function getStaticProps() {
//   const res = (await fetch('https://www.jsonkeeper.com/b/4G1G'))
//   const data = await res.json()

 
//   return{
//     props :{
//       info : data
//     }
//   }
  
// }