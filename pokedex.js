const row = document.querySelector('.row')

let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

fetch(pokeUrl)
.then(response => response.json())
.then(data => {
    console.log('Success', data)
}).catch((error) => {
    console.log('Not Successful', error)
})










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
