const characterId = document.getElementById('characterId')
const btnGo =  document.getElementById('btn-go')
const content = document.getElementById('content')
const image = document.getElementById('img')

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.name)
    });


}
fetchApi(1)
btnGo.addEventListener('click', () => {

});