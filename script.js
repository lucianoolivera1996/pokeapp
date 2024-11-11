//HTML elements
const form = document.getElementById("form");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");
const divSprite = document.querySelector(".sprite");

//API URL
const apiURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

//Pokemon
let pokemon;

//Fetch function
const fetchDataFromURL = async () => {
    const input = searchInput.value.toLowerCase();

    await fetch(`${apiURL}/${input}`)
    .then(response => response.json())
    .then(data => pokemon = data)
    .catch((e) => {
        alert("Pokémon not found");
    })
}

const setOutputData = () => {
    if (Object.values(pokemon)) {
        pokemonName.textContent = pokemon.name ? pokemon.name.toUpperCase() : "NO_NAME";
        pokemonId.textContent = pokemon.id ? `#${pokemon.id}` : "NO_ID";
        pokemonWeight.textContent = pokemon.weight ? `Weight: ${pokemon.weight}` : `Weight: NO_WEIGHT`;
        pokemonHeight.textContent = pokemon.height ? `Height: ${pokemon.height}` : `Height: NO_HEIGHT`;
        divSprite.innerHTML = `<img id="sprite" src="${pokemon.sprites.front_default}" width="75px" height="75px" alt="${pokemon.name}-img"/>`;
        pokemonTypes.innerHTML = `${pokemon.types.map(({type}) => `<span class="type">${type.name.toUpperCase()}</span>`).join("")}`;
        pokemonHp.textContent = pokemon.stats[0].base_stat ? pokemon.stats[0].base_stat : "NO_HP";    
        pokemonAttack.textContent = pokemon.stats[1].base_stat ? pokemon.stats[1].base_stat: "NO_ATTACK";    
        pokemonDefense.textContent = pokemon.stats[2].base_stat ? pokemon.stats[2].base_stat : "NO_DEFENSE";    
        pokemonSpAttack.textContent = pokemon.stats[3].base_stat ? pokemon.stats[3].base_stat : "NO_SPAttack";    
        pokemonSpDefense.textContent = pokemon.stats[4].base_stat ? pokemon.stats[4].base_stat : "NO_SPDefense";    
        pokemonSpeed.textContent = pokemon.stats[5].base_stat ? pokemon.stats[5].base_stat : "NO_SPEED";    
    }
}

//Prevent submision
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    await fetchDataFromURL();

    setOutputData();

});