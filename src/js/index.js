console.log("javaScript connected");

document.addEventListener("DOMContentLoaded", function () {
  const apiURL = "https://digimon-api.herokuapp.com/api/digimon";
  const digimonList = document.querySelectorAll(".digimon-list")[0];
  const parser = new DOMParser(); // DOMParser is a built in JS functionality. //keyword "new" creates a new object!
  fetch(`${apiURL}`)
    .then((response) => {
      return response.json();
    })
    .then((responseJSON) => {
      const digimon = [...responseJSON]; // create an array of all  209 digimon //... is a spread operator, it spreads open the array
      console.log("digimon", digimon);
      return digimon;
    })
    .then((digimon) => {
      digimon.forEach((currentDigimon) => {
        const digimonLi = parser.parseFromString(
          //. dot notation is happeningggg. parseFromString turns text into HTML
          `<li id=${currentDigimon.name}><p>${currentDigimon.name}</p><p>Level: ${currentDigimon.level}</p><div class="img-container" ><div><img alt="image missing" src=${currentDigimon.img} /></div></div></li>`,
          "text/html"
        );
        digimonList.appendChild(digimonLi.body.firstChild);
      });
    });
});
