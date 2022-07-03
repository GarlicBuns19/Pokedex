const row = document.querySelector('.row')
const btnsearch = document.querySelector('.search')
const card = document.getElementById('card')

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// Pokemon Name
async function getData(){
    let data = await fetch(pokeUrl)
    .then(data => data.json())
    .then(data => {
        data.results.forEach((n) => {
            btnsearch.innerHTML += `<button id="pokemon" onmouseover="pokemonUrl('${n.url}')">${n.name}</button>`;
            // use the += to show all data
            // = shows last data
        })
    })
    // .then(data => console.log(data.results[0].name))
    try{
        console.log('Success')
    }catch(error){
        console.log('error')
    }
};
getData();
// =======================================================================================================================

// Pokemon Card Create
function cardCreate(){
    `<div class="col-md-4">
         <div class="card" style="width: 21rem;">
            <div id="poke-Img">
                <img src="${data.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">
            </div>
             <div class="card-body">
                <h5 class="card-title">
                    ${data.name}
                </h5>
                <p class="card-text">
                    ${data.types[0].type.name}
                </p>
                <p class="card-text">
                    ${data.abilities[0].ability.name}
                </p>
             </div>
         </div>
     </div>`
};
// =======================================================================================================================

// After it gets pokemon url
function pokemonUrl(url) {
    card.innerHTML += cardCreate()
    fetch(url)
    .then(res => res.json())
    .then(pokemon => {
        pokemon.forEach((details => {
            document.querySelector('.poke-Img').innerHTML += `<img src="${details.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">`
            document.querySelector('.card-body').innerHTML += `
                <h5 class="card-title">
                    ${details.name}
                </h5>
                <p class="card-text">
                    ${details.types[0].type.name}
                </p>
                <p class="card-text">
                    ${details.abilities[0].ability.name}
                </p>
            `
    }))
})
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
}
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
