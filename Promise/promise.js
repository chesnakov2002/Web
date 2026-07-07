console.log("Загрузка началась");

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка статуса: ${response.status}`);
    }

    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.error("Ошибка запроса", error);
  })
  .finally(() => {
    console.log("Загрузка закончилась");
  });
