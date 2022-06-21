const row = document.querySelector('.row')
const btnsearch = document.querySelector('.search')

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// Pokemon Name
async function getData(){
    let data = await fetch(pokeUrl)
    .then(data => data.json())
    .then(data => {
        data.results.forEach((n) => {
            btnsearch.innerHTML += `<button id="pokemon" onmouseover="pokemonUrl('${n.url}')">${n.name}</button>`
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
        // if statement
        console.log(p.types[0].type.name)
        console.log(p.types[1].type.name)
        // if statement
        console.log(p.abilities[0].ability.name)
        console.log(p.abilities[1].ability.name)
        console.log(p.abilities[2].ability.name)
    })
}

const cardCreate = () => {
    `<div class="col-md-4">
        <div class="card" style="width: 21rem;">
            <img src="${data.sprites.front_default}" class="card-img-top img-fluid" alt="Pokemon Pic">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">${data.types[0].type.name}</p>
                <p class="card-text">${data.abilities[0].ability.name}</p>
            </div>
        </div>
    </div>`
}
