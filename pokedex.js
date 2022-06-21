const row = document.querySelector('.row')
const btnsearch = document.querySelector('.search')

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// Pokemon Name
async function getData(){
    let data = await fetch(pokeUrl)
    .then(data => data.json())
    .then(data => {
        data.results.forEach((n) => {
            btnsearch.innerHTML += `<button id="pokemon" onclick="pokemonUrl('${n.url}')">${n.name}</button>`
            // use the += to show all data
        })
    })
    // .then(data => console.log(data.results[0].name))
    try{
        console.log('Success')
    }catch(error){
        console.log('error')
    }
}
// Calling the function
getData();
// Pokemon Names
// fetch(pokeUrl).then(
//     res => res.json()
// ).then(res => {
//         res.results.forEach((e) => {
//             console.log(e.name);
//             console.log(e.url);
//         })}
// )
function pokemonUrl(url) {
    fetch(url)
    .then(res => res.json())
    .then((p) => {
        console.log(p.name)
        console.log(p.sprites.front_default)
        console.log(p.types[0].type.name)
    })
}
