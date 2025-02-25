// En liste med urter (objekter), der indeholder navn, beskrivelse og billede
const urter = [
  {
    navn: "Kamille",
    beskrivelse: "God mod stress, søvnproblemer og fordøjelse.",
    billede: "./assets/img/pexels-adem-albayrak-383796555-17192986.jpg",
  },
  {
    navn: "Pebermynte",
    beskrivelse: "Hjælper mod maveproblemer og hovedpine.",
    billede: "./assets/img/pexels-ian-panelo-3196523.jpg",
  },
  {
    navn: "Lavendel",
    beskrivelse: "Har antiinflammatoriske egenskaber og styrker immunforsvaret.",
    billede: "./assets/img/pexels-leah-newhouse-50725-3085106.jpg",
  },
  {
    navn: "Rosmarin",
    beskrivelse: "Beroliger nerverne og forbedrer søvn.",
    billede: "./assets/img/pexels-verolova-30724422.jpg",
  },
  {
    navn: "Baldrian",
    beskrivelse: "Forbedrer hukommelse og koncentration.",
    billede: "./assets/img/pexels-lucasdc-27240244.jpg",
  },
  {
    navn: "Brændenælde",
    beskrivelse: "Antibakteriel og god mod luftvejsinfektioner.",
    billede: "./assets/img/pexels-marina-zasorina-9432640.jpg",
  },
  {
    navn: "Timian",
    beskrivelse: "Naturligt beroligende middel mod stress og søvnløshed.",
    billede: "./assets/img/pexels-eva-bronzini-5501053.jpg",
  },
  {
    navn: "Mælkebøtte",
    beskrivelse: "Rig på vitaminer og hjælper mod betændelse.",
    billede: "./assets/img/pexels-markusspiske-1036576.jpg",
  },
  {
    navn: "Salvie",
    beskrivelse: "Styrker hukommelsen og hjælper mod svedeture.",
    billede: "./assets/img/pexels-lenka-z-1384690-2674239.jpg",
  },
  {
    navn: "Echinacea",
    beskrivelse: "Styrker immunforsvaret og bekæmper forkølelse.",
    billede: "./assets/img/pexels-markus-winkler-1430818-5227050.jpg",
  },
];

// Finder det sted på websiden hvor urterne skal vises, gemmer det så jeg senere kan indsætte alle urterne
const herbContainer = document.querySelector("#herb-container");

// Gennemgår hver eneste urt fra min liste i toppen. ForEach = for hver! Så for hver urt, skal der ske noget.
urter.forEach((urt) => {

// Hver lille "herbDiv"-boks fyldes med indhold: navn og billedet af urten. 
  const herbDiv = document.createElement("div");
  herbDiv.innerHTML = `<img src="${urt.billede}" alt="${urt.navn}" />
      <h3>${urt.navn}</h3>`;

  // Når bruger klikker på urteboks, skal der ske noget!
  herbDiv.addEventListener("click", function () {
    showPopup(urt); // Kalder showPopup funktion, der viser popup med urtens detaljer
  });

  // Jeg tager hver lille "herbDiv"-boks fra før og indsætter dem i "herbContainer". Jeg forstår det som at, min HerbContainer er en stor kasse, og at appendChild bruges til at placere hver urt (HerbDiv, som er i sin egen lille kasse) i den store kasse. Altså at AppendChild tager én ting (et child element) og lægger det nederst i en anden ting (parent element).
  herbContainer.appendChild(herbDiv);
});

// Funktion der viser popup'en med urtens detaljer. Den får en urt som input og dens opgave er at vise brugeren flere detaljer om urten.
function showPopup(urt) {
  // Gør popup'en synlig ved at ændre display til flex
  document.querySelector("#popup").style.display = "flex";

  // Sætter urtens navn ind i popup
  document.querySelector("#popup-name").textContent = urt.navn;

  // Sætter urtens billede ind i popup
  document.querySelector("#popup-image").src = urt.billede;

  // Sætter beskrivelsen af urten ind i popup
  document.querySelector("#popup-description").textContent = urt.beskrivelse;
}
// Luk popup når man klikker på krydset
document.querySelector("#popup-close").addEventListener("click", function () {
  // Skjul popup ved at ændre til display none
  document.querySelector("#popup").style.display = "none";
});
