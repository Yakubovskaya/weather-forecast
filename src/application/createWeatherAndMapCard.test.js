import { createWeatherAndMapCard } from "./createWeatherAndMapCard";

describe("createWeatherAndMapCard", () => {
  let el;
  const cityName = "Moscow";
  const description = "clear sky";
  const icon = "01d";
  const temp = 282.55;
  const weatherData = {
    weather: [
      {
        description,
        icon,
      },
    ],
    main: {
      temp,
    },
    name: cityName,
  };

  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createWeatherAndMapCard(el, weatherData);
  });

  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });

  // eslint-disable-next-line max-len
  it("function puts weather card and map into the HTML elements and shows it", async () => {
    const cityEl = el.querySelector(".city");
    const tempEl = el.querySelector(".temp");
    const descrEl = el.querySelector(".descr");
    const iconEl = el.querySelector(".icon");
    const mapEl = el.querySelector(".map");
    const API_MAP = "AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ";

    const expCityEl = `${weatherData.name}`;
    const expTempEl = `${Math.round(weatherData.main.temp - 273)}°`;
    const expDescrEl = `${weatherData.weather[0].description}`;
    const expIconEl = `<img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`;
    const expMapEl = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${weatherData.name}&amp;zoom=9&amp;size=300x300&amp;&amp;markers=size:mid%7Ccolor:0xFFFF00%7C${weatherData.name}&amp;key=${API_MAP}">`;

    expect(cityEl.innerHTML).toStrictEqual(expCityEl);
    expect(tempEl.innerHTML).toStrictEqual(expTempEl);
    expect(descrEl.innerHTML).toStrictEqual(expDescrEl);
    expect(iconEl.innerHTML).toStrictEqual(expIconEl);
    expect(mapEl.innerHTML).toStrictEqual(expMapEl);
  });
});
