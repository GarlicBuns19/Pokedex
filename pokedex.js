const row = document.querySelector('.row')


let pokeUrl = 'https://pokeapi.co/api/v2/pokemon/';

fetch(pokeUrl). then( response => {
    return response.json()
}).
then(data => {
    // console.log(data.abilities);
    // data.abilities.forEach((e) => {
    //     row.innerHTML +=`<h1> ${e.ability.name} </h1>`
    // })
    // data.results.forEach((e) => {
    //     console.log(e);

    // });
    console.log(data);
}).catch((error) => {
        console.log('Not Successful', error)
    })

