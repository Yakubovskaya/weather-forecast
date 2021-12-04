import { realizeWeatherForecast } from "./realizeWeatherForecast";
import { sleep } from "./sleep";

describe("realizeWeatherForecast", () => {
  let el;
  let mockFridge;
  let ipData;
  let weatherData;
  let API_KEY_WEATHER;
  const delay = 1000;
  const unmockedFetch = global.fetch;
  const unmockedStorageSetItem = global.Storage.prototype.setItem;
  const unmockedStorageGetItem = global.Storage.prototype.getItem;
  const storageKey = "items";

  beforeAll(() => {
    global.fetch = jest.fn();
    mockFridge = {};
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockFridge[key] = value;
    });
    global.Storage.prototype.getItem = jest.fn(
      (key) => mockFridge[key] ?? "[]"
    );
  });
  afterAll(() => {
    global.fetch = unmockedFetch;
    global.Storage.prototype.setItem = unmockedStorageSetItem;
    global.Storage.prototype.getItem = unmockedStorageGetItem;
  });
  beforeEach(() => {
    mockFridge = {};
    el = document.createElement("div");
    document.body.append(el);
    const lon = 30.2618;
    const lat = 59.8983;
    ipData = { latitude: lat, longitude: lon };
    API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
    const cityName = "Saint Petersburg";
    const description = "light rain";
    const icon = "10n";
    const temp = 278.47;
    weatherData = {
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

    global.fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(ipData) })
      // eslint-disable-next-line max-len
      .mockResolvedValueOnce({ json: () => Promise.resolve(weatherData) });
  });

  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });

  it("show weather and map in User city", async () => {
    realizeWeatherForecast(el);
    await sleep(delay);
    expect(global.fetch).toHaveBeenNthCalledWith(1, "https://ipapi.co/json/", {
      method: "GET",
    });
    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${API_KEY_WEATHER}`,
      {
        method: "GET",
      }
    );
    const weatherCard = document.querySelector(".weather-wrapper");
    const cityEl = weatherCard.querySelector(".city");
    const tempEl = weatherCard.querySelector(".temp");
    const descrEl = weatherCard.querySelector(".descr");
    const iconEl = weatherCard.querySelector(".icon");
    const mapEl = weatherCard.querySelector(".map");
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

  it("shows LocalStorage items when app has started", async () => {
    const itemsArray = ["Выборг", "Москва", "Тверь"];
    mockFridge[storageKey] = itemsArray;
    realizeWeatherForecast(el);
    await sleep(delay);
    const ulEl = document.querySelector("ul");
    expect(ulEl.innerHTML).toStrictEqual(
      "<li>Выборг</li><li>Москва</li><li>Тверь</li>"
    );
  });
});
