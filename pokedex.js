const row = document.querySelector('.row')

let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

// This works to fetch api
fetch(pokeUrl)
.then(response => response.json())
// .then(data => {
//     console.log('Success', data)})
    .then((response) => {
    let pokemon = response.results;
    pokemon.forEach((title) => {
        row.innerHTML += `<h1> ${title.name} </h1>`
    }).then((response) => {
        let pokemona = response.results.abilitites.ability;
        pokemona.forEach((title) => {
            row.innerHTML += `<h2> ${title.name} </h1>`
        }) })
    
})
.catch((error) => {
    console.log('Not Successful', error)
})

// function getApi(url) {
//     fetch(url)
//     .then(response => response.json())
//     .then((response) => {
//         let pokemon = response.results;
//         pokemon.forEach((h1) => {
//             row.innerHTML += `<h1>${h1.name}</h1>`
//         })
//     })
// }
// getApi(pokeUrl)









// async function pokemonData() {
//     let url = 'https://pokeapi.co/api/v2/pokemon/'
//     try{
//         let pokeCollection =  await fetch(url);
//         return await pokeCollection.json();
//     }catch(error){
//         console.log(error)
//     }
// }
// console.log(pokemonData())
// async function pokeCards() {
//     let pokemon = await pokemonData()
//     pokemon.results.forEach(item => {
//         `
//         <div class="col-md-4">
//                 <div class="card" style="width: 21rem;">
//                         <h5 class="card-title">${item.name}</h5>
//                     </div>
//                 </div> 
//             </div>
//         `
//     })
// }
// row.innerHTML = pokeCards()
