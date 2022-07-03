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
        data.results.forEach((n) => {
            btnsearch.innerHTML += `<button id="pokemon" onclick="pokemonUrl('${n.url}')">${n.name}</button>`;
            // use the += to show all data
            // = shows last data
        })
        next.innerHTML += `<button onclick="getData('${data.next}')">Next Pokemon</button>`;
    })
    // .then(data => console.log(data.results[0].name))
    try{
        console.log('Success')
    }catch(error){
        console.log('error')
    }
};
getData(pokeUrl);
// =======================================================================================================================

// Pokemon Card Create
function cardCreate(){
    card.innerHTML = '';
    card.innerHTML = `<div class="col-md-4">
         <div class="card" style="width: 21rem;">
            <div id="poke-Img"> </div>
            <div class="card-body"> </div>
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
            // document.querySelector('#poke-Img').innerHTML += `<img src="${pokemon.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">`
            document.querySelector('#poke-Img').innerHTML += `<img src="${pokemon.sprites.other['official-artwork'].front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">`
            ,document.querySelector('.card-body').innerHTML += `
                <h5 class="card-title">
                    ${pokemon.name}
                </h5>
                <p class="card-text">
                    ${pokemon.types[0].type.name}
                </p>
                <p class="card-text">
                    ${pokemon.abilities[0].ability.name}
                </p>
            `
    })
};
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


// function cardCreate(data) {
//     data.forEach((data) => {
//         card.innerHTML += `<div class="col-md-4">
//         <div class="card" style="width: 21rem;">
//             <img src="${data.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">
//             <div class="card-body">
//             <h5 class="card-title">${data.name}</h5>
//             <p class="card-text">${data.types[0].type.name}</p>
//                 <p class="card-text">${data.abilities[0].ability.name}</p>
//             </div>
//         </div>
//     </div>`
// })};
