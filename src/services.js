const URL_API = "http://localhost:8000/character"

// CREATE METHOD : (POST)
async function createCharacter() {

}
// READ METHOD : (GET)
async function getAllCharacters() {
    const response = await fetch(URL_API, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }, 
    })
    const data = await response.json() //pasar datos a formato json
    return data

}

const listTag = document.getElementById('charactersList')

async function printCharacter() {
     const characters = await getAllCharacters() 
     characters.map((character) => {
        listTag.innerHTML += `<li>
        <p>${character.name}</p>
        <p>${character.id}</p>
        <p>${character.house}</p>
        <p>${character.age}</p>
        <button onclick= "deleteCharacter(${character.id})">Delete</button>
        </li>`
     })
}
    printCharacter()

// UPDATE METHOD : (PUT)
async function updateCharacter() {
    
}

// DELETE METHOD : (DELETE)

async function deleteCharacter(id) {
    const response = await fetch(URL_API + `/${id}` , { 
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    })
    const deletedCharacter = await response.json()
    return deletedCharacter
} 