const row = document.querySelector('.row')

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/'

// async function getData(){
//     let data = await fetch(pokeUrl)
//     .then(data => data.json())
//     .then(data => {
//         data.results.forEach((n) => {
//             row.innerHTML += `<h1>${n.name}</h1>`
//             // use the += to show all data
//         })
//     })
//     // .then(data => console.log(data.results[0].name))
//     try{
//         console.log('Success')
//     }catch(error){
//         console.log('error')
//     }
    
// }
// getData();

fetch(pokeUrl).then(
    res => res.json() 
).then(
    res => {
        res.results.forEach((e) => {
            console.log(e.name)
        })
    }
)