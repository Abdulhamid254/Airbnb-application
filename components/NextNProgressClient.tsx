"use client"

import { useEffect, useState } from "react";



function NextNProgress() {
  const [progress, setProgress] = useState(0);

    useEffect(() => {
    const interval = setInterval(()=>{
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress +10
      );
    }, 600);
  }, [])

  // return (
  //   <div className="color=[#FE595E]">NextNProgress</div>
  // )
}

export default NextNProgress

// import { useEffect, useState } from 'react';




// const NextNProgress = () => {
//   const [progress, setProgress] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(()=>{
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 0 : prevProgress +10
//       );
//     }, 600);
//   }, [])
//     return 
//     <div>NextNProgress</div>
// };

// export default NextNProgress;
//   // color: '#FE595E',
 