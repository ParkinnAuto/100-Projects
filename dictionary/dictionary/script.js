const wordInput = document.querySelector(".wordInput");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

async function translate() {
  const userInput = wordInput.value.trim();

  try {
    if (!userInput) {
      alert("Please input a word");
      return;
    }
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );

    if (!response.ok) {
      throw new Error(error);
    }

    const data = await response.json();
    const word = `"${data[0].word}"`;
    const phonetic = `"${data[0].phonetic}"`;
    let meaning = "";
    data[0].meanings.forEach((meaningEntry) => {
      const partOfSpeech = meaningEntry.partOfSpeech;
      meaningEntry.definitions.forEach((def) => {
        meaning += `${partOfSpeech}: ${def.definition}\n`;
      });
    });

    console.log('คำจำกัดความทั้งหมด:', meaning);

    result.innerHTML = `
      <h2>${word} ${phonetic ? '(' + phonetic + ')' : ''}</h2>
      <pre class="meaning-block">${meaning}</pre>
    `;
  } 
  
  catch (error) {
    alert(error.message);
  }
}

btn.addEventListener('click', translate);