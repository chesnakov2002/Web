async function loadJsonData() {
  console.log("Загрузка началась");
  try {
    let response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

    if (!response.ok) {
      throw new Error(`Ошибка статуса: ${response.status}`);
    }
    let jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.error("Ошибка запроса", error);
  } finally {
    console.log("Загрузка закончилась");
  }
}

loadJsonData();