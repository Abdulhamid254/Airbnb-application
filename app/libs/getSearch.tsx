export default async function getSearch() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS', { cache: 'no-cache'});
  //https://links.papareact.com/isz

    if(!searchResults.ok){
        throw new Error('Failed to fetch users')
    }

    return await searchResults.json()
    
}