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
      return digimon;
    })
    .then((digimon) => {
      digimon.forEach((currentDigimon) => {
        console.log(currentDigimon);
        // const currentDigimonName = currentDigimon.name;
        const digimonLi = parser.parseFromString(
          //. dot notation is happeningggg. parseFromString turns text into HTML
          `<li id=${currentDigimon.name}><p>${currentDigimon.name}</p><a><img src=${currentDigimon.img} /></a></li>`,
          "text/html"
        );
        digimonList.appendChild(digimonLi.body.firstChild);
      });
    });
});
