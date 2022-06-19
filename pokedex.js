const row = document.querySelector('.row')

async function pokemonData() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=30'
    try{
        let pokeCollection =  await fetch(url);
        return await pokeCollection.json();
    }catch(error){
        console.log(error)
    }
}
console.log(pokemonData())
async function pokeCards() {
    let pokemon = await pokemonData()
    pokemon.results.foreach(pk => {

    })
}
