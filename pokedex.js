const row = document.querySelector('.row');
const btnsearch = document.querySelector('.search');
const card = document.getElementById('card');
const next = document.getElementById('next');

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// Pokemon Name
async function getData(url){
    let data = await fetch(url)
    .then(data => data.json())
    .then(data => {
        // To refresh pokemon
        btnsearch.innerHTML = '';
        next.innerHTML = '';
        // let help = data.results
        // help.forEach(h=>{
        //     console.log(h.url)
        // })
        data.results.forEach((n) => {
            btnsearch.innerHTML += `<button id="pokemon" onclick="pokemonUrl('${n.url}')">${n.name}</button>`;
            // use the += to show all data
            // = shows last data
        })
        // For next and previous pokemon
        if(data.previous){
            next.innerHTML += `<button onclick="getData('${data.previous}')">Previous Pokemon</button>`;
        }
        next.innerHTML += `<button onclick="getData('${data.next}')">Next Pokemon</button>`;
    })
    try{
        console.log('Success')
    }catch(error){
        console.log('error')
    }
    return data;
};
getData(pokeUrl);
// =======================================================================================================================

// Pokemon Card Create
function cardCreate(){
    card.innerHTML = '';
    card.innerHTML = `<div class="col-md-4">
         <div class="card" style="width: 21rem;">
            <div class="card-body"> 
                <div id="poke-Img"></div>
                <div id="poke-Name"></div>
                <h5>Pokemon Type</h5>
                <div id="poke-Type"></div>
                <h5>Pokemon Abilities</h5>
                <div id="poke-Ability"></div>
            </div>
         </div>
     </div>`
};
// =======================================================================================================================

// After it gets pokemon url
function pokemonUrl(url) {
    cardCreate()
    fetch(url)
    .then(res => res.json())
    .then(pokemon => {
            // For pokemon type
            pokemon.types.forEach((typeName) => {
                document.getElementById('poke-Type').innerHTML += `
                <p class="card-text">
                    ${typeName.type.name.charAt(0).toUpperCase() + typeName.type.name.substring(1)}
                    <img src="./images/pokemon-types/${typeName.type.name.charAt(0).toUpperCase() + typeName.type.name.substring(1)} type.ico" alt="poke-Type-icon">
                </p>
                `
            })
            // For pokemon abilities
            pokemon.abilities.forEach((abilityName) => {
                document.getElementById('poke-Ability').innerHTML += `
                <p class="card-text">
                    ${abilityName.ability.name.charAt(0).toUpperCase() + abilityName.ability.name.substring(1)}
                </p>
                `
            })
            // document.querySelector('#poke-Img').innerHTML += `<img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">`
            document.querySelector('#poke-Img').innerHTML += `<img src="${pokemon.sprites.other['official-artwork'].front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">`
            document.querySelector('#poke-Name').innerHTML += `
                <h5 class="card-title">
                    ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
                </h5>
            `
    })
    let pokeHabitats = 'https://pokeapi.co/api/v2/pokemon-habitat/'
};
// =======================================================================================================================
    // .then((p) => {
    //     console.log(p.name)
    //     console.log(p.sprites.front_default)
    //     // if statement
    //     console.log(p.types[0].type.name)
    //     console.log(p.types[1].type.name)
    //     // if statement
    //     console.log(p.abilities[0].ability.name)
    //     console.log(p.abilities[1].ability.name)
    //     console.log(p.abilities[2].ability.name)
    // })
// }
// =======================================================================================================================