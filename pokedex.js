const row = document.querySelector('.row')

async function pokemonData() {
    let url = 'https://pokeapi.co/api/v2/pokemon/'
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
    pokemon.results.forEach(item => {
        `
        <div class="col-md-4">
                <div class="card" style="width: 21rem;">
                        <h5 class="card-title">${item.name}</h5>
                    </div>
                </div> 
            </div>
        `
    })
}
row.innerHTML = pokeCards()
