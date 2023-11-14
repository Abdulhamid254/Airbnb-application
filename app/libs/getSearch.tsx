
// export default async function getSearch() {
//   try {
//     const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS', { cache: 'no-cache' });

//     if (!searchResults.ok) {
//       // Handle non-successful responses here
//       throw new Error('Failed to fetch data');
//     }

//     // Handle successful response here
//     const data = await searchResults.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Rethrow the error if necessary
//   }
// }




export default async function getSearch() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS', { cache: 'no-cache'});
  //https://links.papareact.com/isz

    if(!searchResults.ok){
        throw new Error('Failed to fetch users')
    }

    return await searchResults.json()
    
}