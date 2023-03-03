loadData();

async function getData(url, data) {
  const response = fetch(url);
  response
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      data.textContent = res.count;
    });
}

async function loadData() {
  const people = document.querySelector(".peopleData");
  const starships = document.querySelector(".starshipsData");
  const planets = document.querySelector(".planetsData");
  getData('https://swapi.dev/api/people', people);
  getData('https://swapi.dev/api/starships', starships);
  getData('https://swapi.dev/api/planets', planets);
}
