const species = document.querySelector('.species');
const select = document.querySelector('.select');
const btn = document.querySelector('.btn');
const display = document.querySelector('.display');

const apiKey = "Q92z5N50WiGlxQ51UsX0dA==fw4mFGsyr2853KY4";

btn.addEventListener('click', search);

async function search() {
  try {
    const inputSpecies = species.value.trim();
    const inputSelect = select.value;

    if (inputSpecies === '' || inputSelect === '') {
      alert('Please input information');
      return;
    }

    const url =
      inputSelect === 'dog'
        ? `https://api.api-ninjas.com/v1/dogs?name=${inputSpecies}`
        : `https://api.api-ninjas.com/v1/cats?name=${inputSpecies}`;

    const response = await fetch(url, {
      headers: { 'X-Api-Key': apiKey },
    });

    if (!response.ok) {
        throw new Error('API request failed')
    };

    const data = await response.json();
    if (!data[0]) {
      display.innerHTML = `<p>No data found.</p>`;
      return;
    }

    const animal = data[0];
    let html = `
      <img src="${animal.image_link}" alt="${animal.name}" />
      <h2>${animal.name}</h2>
      <ul>
    `;

    for (const key in animal) {
      if (key !== "name" && key !== "image_link") {
        html += `<li>${key.replaceAll('_', ' ')}: ${animal[key]}</li>`;
      }
    }

    html += `</ul>`;
    display.innerHTML = html;
  } catch (error) {
    console.error(error);
    alert('Error fetching data.');
  }
}
