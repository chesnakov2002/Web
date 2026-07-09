async function getRandomQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Ошибка");
    }

    const jsonData = await response.json();
    console.log(`"${jsonData.quote}" - Автор: ${jsonData.author}.`);
  } catch (error) {
    console.error("Произошла ошибка:", error.message);
  }
}

getRandomQuote();
