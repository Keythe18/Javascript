onInit();

let planets;

async function onInit() {
  const nbPages = await getNumberPage();
  planets = await getPlanets(nbPages);
  displayPlanets(planets);
}

async function getNumberPage() {
  const response = await fetch("https://swapi.dev/api/planets/");
  const data = await response.json();
  document.querySelector(".dataCount").textContent = data.count;
  return data.count / 10;
}

async function getPlanets(nbPages) {
  let planets = [];
  for (let i = 1; i <= nbPages; i++) {
    const response = await fetch("https://swapi.dev/api/planets/?page=" + i);
    const data = await response.json();
    planets = planets.concat(data.results);
  }
  return planets;
}

function displayPlanets(planets) {
  let tbody = document.querySelector(".tbodyPlanets");
  planets.forEach((planet) => {
    const tr = document.createElement("tr");
    tr.addEventListener("click", displayDetails);
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.textContent = planet.name;
    td2.textContent = planet.terrain;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });
}

// details planete

function displayDetails(event) {
  // fetch("https://swapi.dev/api/planets/?search=" + event.target.textContent)
  // .then(res => res.json())
  // .then(data => console.log(data))

  const planet = planets.find(
    (planet) => planet.name === event.target.textContent
  );
  document.querySelector(".name").textContent = planet.name;
  document.querySelector(".population").textContent = planet.population;
}
