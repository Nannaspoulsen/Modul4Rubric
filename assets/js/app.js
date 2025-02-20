document.addEventListener("DOMContentLoaded", function () {
  const herbs = [
    { name: "Kamille", description: "God mod stress, søvnproblemer og fordøjelse.", image: "./assets/img/pexels-adem-albayrak-383796555-17192986.jpg" },
    { name: "Pebermynte", description: "Hjælper mod maveproblemer og hovedpine.", image: "./assets/img/pexels-ian-panelo-3196523.jpg" },
    { name: "Lavendel", description: "Har antiinflammatoriske egenskaber og styrker immunforsvaret.", image: "./assets/img/pexels-leah-newhouse-50725-3085106.jpg" },
    { name: "Rosmarin", description: "Beroliger nerverne og forbedrer søvn.", image: "./assets/img/pexels-verolova-30724422.jpg" },
    { name: "Baldrian", description: "Forbedrer hukommelse og koncentration.", image: "./assets/img/pexels-lucasdc-27240244.jpg" },
    { name: "Brændenælde", description: "Antibakteriel og god mod luftvejsinfektioner.", image: "./assets/img/pexels-marina-zasorina-9432640.jpg" },
    { name: "Timian", description: "Naturligt beroligende middel mod stress og søvnløshed.", image: "./assets/img/pexels-eva-bronzini-5501053.jpg" },
    { name: "Mælkebøtte", description: "Rig på vitaminer og hjælper mod betændelse.", image: "./assets/img/pexels-markusspiske-1036576.jpg" },
    { name: "Salvie", description: "Styrker hukommelsen og hjælper mod svedeture.", image: "./assets/img/pexels-lenka-z-1384690-2674239.jpg" },
    { name: "Echinacea", description: "Styrker immunforsvaret og bekæmper forkølelse.", image: "./assets/img/pexels-markus-winkler-1430818-5227050.jpg" }
  ];

  const herbContainer = document.querySelector("#herb-container");

  // Vis urterne i grid'et
  herbs.forEach(herb => {
    const herbDiv = document.createElement("div");
    herbDiv.innerHTML = `
      <img src="${herb.image}" alt="${herb.name}" />
      <h3>${herb.name}</h3>
    `;
    herbDiv.addEventListener("click", function() {
      showPopup(herb);
    });
    herbContainer.appendChild(herbDiv);
  });

  // Funktion til at vise popup'en
  function showPopup(herb) {
    document.querySelector("#popup").style.display = "flex";
    document.querySelector("#popup-name").textContent = herb.name;
    document.querySelector("#popup-image").src = herb.image;
    document.querySelector("#popup-description").textContent = herb.description;
  }

  // Luk popup'en
  document.querySelector("#popup-close").addEventListener("click", function() {
    document.querySelector("#popup").style.display = "none";
  });
});
