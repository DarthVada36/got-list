const URL_API = "http://localhost:3000/characters"

//CREATE Method: POST
async function createCharacter() {
    
}

//READ Method: GET
async function getAllCharacters() {
    const response = await fetch (URL_API, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",       
        },
    })
    const characters = await response.json () //pasar datos a formato json
    return characters
}

const listTag = document.getElementById ('charactersList')

async function printCharacter() {
    const characters = await getAllCharacters()
    characters.map((character) => {
        listTag.innerHTML += `<li>
        <p>${character.id}</p>
        <p>${character.name}</p>
        <p>${character.house}</p>
        <p>${character.age}</p>
    </li>`
    })
}

printCharacter()

//UPDATE Method: EDIT
async function updateCharacter() {
    
}

//DELETE Method: DELETE

async function deleteCharacter(id) {
    const response = await fetch (URL_API + `/${id}` , {
        method: 'DELETE',
        headers: {
            "Conten-Type": "application/json",
        },
    })
    const deletedCharacter = await response.json()
    return deletedCharacter 
}

//RENDER Function
