import { realizeWeatherForecast } from "./realizeWeatherForecast";

describe("realizeWeatherForecast", () => {
  let el;
  let mockFridge;
  let ipData;
  let weather;
  let data;
  let API_MAP;
  let API_KEY_WEATHER;
  const unmockedFetch = global.fetch;
  const unmockedStorageSetItem = global.Storage.prototype.setItem;
  const unmockedStorageGetItem = global.Storage.prototype.getItem;
  const storageKey = "items";

  beforeAll(() => {
    global.fetch = jest.fn();
    API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
    API_MAP = "AIzaSyCVGDC-uRpiX2HiexHVIBHz5k_obk7c1XQ";
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

    global.fetch
      .mockResolvedValueOnce({ json: () => Promise.resolve(ipData) })
      // eslint-disable-next-line max-len
      .mockResolvedValueOnce({ json: () => Promise.resolve(weather) });
  });

  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });

  it("show weather and map in User city", async () => {
    const lon = 30.2618;
    const lat = 59.8983;
    ipData = { latitude: lat, longitude: lon };
    const cityName = "Saint Petersburg";
    const description = "light rain";
    const icon = "10n";
    const temp = 278.47;
    weather = {
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

    await realizeWeatherForecast(el);
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
    const cityEl = el.querySelector(".city");
    const tempEl = el.querySelector(".temp");
    const descrEl = el.querySelector(".descr");
    const iconEl = el.querySelector(".icon");
    const mapEl = el.querySelector(".map");

    const expCityEl = `${weather.name}`;
    const expTempEl = `${Math.round(weather.main.temp - 273)}°`;
    const expDescrEl = `${weather.weather[0].description}`;
    const expIconEl = `<img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">`;
    const expMapEl = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${weather.name}&amp;zoom=9&amp;size=300x300&amp;&amp;markers=size:mid%7Ccolor:0xFFFF00%7C${weather.name}&amp;key=${API_MAP}">`;
    expect(cityEl.innerHTML).toStrictEqual(expCityEl);
    expect(tempEl.innerHTML).toStrictEqual(expTempEl);
    expect(descrEl.innerHTML).toStrictEqual(expDescrEl);
    expect(iconEl.innerHTML).toStrictEqual(expIconEl);
    expect(mapEl.innerHTML).toStrictEqual(expMapEl);
  });

  it("shows LocalStorage items when app has started", async () => {
    const itemsArray = '["Выборг", "Москва", "Тверь"]';
    mockFridge[storageKey] = itemsArray;
    await realizeWeatherForecast(el);
    const ulEl = document.querySelector("ul");
    expect(ulEl.innerHTML).toStrictEqual(
      "<li>Выборг</li><li>Москва</li><li>Тверь</li>"
    );
  });
  it("shows weather and map in the city entered in input element and push city in LocalStrg", async () => {
    const city = "Moscow";
    const description = "clear sky";
    const icon = "01d";
    const temp = 282.55;
    data = {
      weather: [
        {
          description,
          icon,
        },
      ],
      main: {
        temp,
      },
      name: city,
    };

    global.fetch.mockResolvedValueOnce({ json: () => Promise.resolve(data) });

    await realizeWeatherForecast(el);

    const form = el.querySelector("form");
    const input = el.querySelector("input");
    input.value = city;

    await form.dispatchEvent(new Event("submit"));

    const cityEl = el.querySelector(".city");
    const tempEl = el.querySelector(".temp");
    const descrEl = el.querySelector(".descr");
    const iconEl = el.querySelector(".icon");
    const mapEl = el.querySelector(".map");

    const expCityEl = `${data.name}`;
    const expTempEl = `${Math.round(data.main.temp - 273)}°`;
    const expDescrEl = `${data.weather[0].description}`;
    const expIconEl = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    const expMapEl = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${data.name}&amp;zoom=9&amp;size=300x300&amp;&amp;markers=size:mid%7Ccolor:0xFFFF00%7C${data.name}&amp;key=${API_MAP}">`;

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}`,
      {
        method: "GET",
      }
    );

    expect(cityEl.innerHTML).toStrictEqual(expCityEl);
    expect(tempEl.innerHTML).toStrictEqual(expTempEl);
    expect(descrEl.innerHTML).toStrictEqual(expDescrEl);
    expect(iconEl.innerHTML).toStrictEqual(expIconEl);
    expect(mapEl.innerHTML).toStrictEqual(expMapEl);
  });
});
