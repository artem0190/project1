const inpt = document.querySelector("#inpt")
const result = document.querySelector(".result")

window.addEventListener("click", () => {
    let currentInpt = inpt.value;
    const url = `https://restcountries.com/v3.1/name/${currentInpt}?fullText=true`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            result.innerHTML = `
                <img src="${data[0].flags.svg}">
                <img src="${data[0].coatOfArms.svg}">
                <p>population: ${data[0].population|| " " }puple</p>
                <p>time: ${data[0].timezones}</p>
                <p>capital: ${data[0].capital}</p>
                <p>subregion: ${data[0].subregion}</p>
                <p>area: ${data[0].area }km</p>
                <p>continents: ${data[0].continents }</p>
            `
        })
})