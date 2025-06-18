const displayQuote = document.querySelector(".displayQuote");
const btn = document.querySelector(".btn");

const apiKey = "Q92z5N50WiGlxQ51UsX0dA==fw4mFGsyr2853KY4";

async function getQuote() {
  const url = "https://api.api-ninjas.com/v1/quotes";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });

    if(!response.ok){
        throw new Error ('Something went wrong');
    }

    const data = await response.json();
    console.log(data);
    const quoteText  = `"${data[0].quote}"`;
    const author = `"${data[0].author}"`;
    const category = `"${data[0].category}"`;

    displayQuote.innerHTML = `
        <h2>${quoteText}</h2>
        <br>
        <p>${author}</p>
        <small>Category: [${category}]</small>
    `;
  } 
  
  catch (error) {
    quote.textContent = "Error";
    console.error(error);
  }
}

btn.addEventListener("click", getQuote);

