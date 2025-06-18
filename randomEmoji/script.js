const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
const emojiCharEl = document.getElementById("emoji-char");

const emojiList = [];

async function getEmoji() {

  try {
    const response = await fetch(
      "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
    );
    const data = await response.json();

    for (let i = 0; i < 1500 && i < data.length; i++) {
      emojiList.push({
        emojiChar: data[i].character,
        emojiName: data[i].unicodeName,
      });
    }
  } 
  
  catch (error) {
    console.error("Failed to load emojis:", error.message);
    alert("Error loading emojis!");
  }
}

// Load once
getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emojiList.length);
  const selected = emojiList[randomNum];

  emojiCharEl.innerText = selected.emojiChar;
  emojiNameEl.innerText = selected.emojiName;
});
