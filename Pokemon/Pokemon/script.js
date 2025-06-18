const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const displayData = document.querySelector(".displayData");

async function search() {
  const userInput = input.value.trim();

  if (userInput === "") {
    alert("Please enter Pokemon name");
    return;
  }

  const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

  try {
    const response = await fetch(pokemonURL);

    if (!response.ok) {
      throw new Error("No data found");
    }

    const data = await response.json();

    console.log(data);

    const name = data.name;
    const image = data.sprites.front_default;
    const abilities = data.abilities
      .map((item) => item.ability.name)
      .join(", ");
    const stats = data.stats
      .map((stat) => {
        return `<li><strong>${stat.stat.name.toUpperCase()}:</strong> ${
          stat.base_stat
        }</li>`;
      })
      .join("");

    displayData.innerHTML = `
        <div class="card">
                <img src="${image}" alt="${name}" />
                <h2>${name.toUpperCase()}</h2>
                <p><strong>Abilities:</strong> ${abilities}</p>
                <h3>Stats</h3>
                <ul class="stat-list">${stats}</ul>
            </div>
        `;
  } catch (error) {
    alert(error.message);
    displayData.innerHTML = "";
  }
}

btn.addEventListener("click", search);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
