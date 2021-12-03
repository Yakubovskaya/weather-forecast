import { realizeWeatherForecast } from "./realizeWeatherForecast";
import { sleep } from "./sleep";

describe("realizeWeatherForecast", () => {
  let el;
  let mockFridge;
  let ipData;
  // let API_KEY_WEATHER;
  const delay = 100;
  const unmockedFetch = global.fetch;
  const unmockedStorageSetItem = global.Storage.prototype.setItem;
  const unmockedStorageGetItem = global.Storage.prototype.getItem;
  // const storageKey = "items";

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
    // API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
    const cityName = "Saint Petersburg";
    const description = "light rain";
    const icon = "10n";
    const temp = 278.47;
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

    global.fetch
      .mockResolvedValueOnce(() =>
        Promise.resolve({ json: () => Promise.resolve(ipData) })
      )
      .mockResolvedValueOnce(() =>
        Promise.resolve({ json: () => Promise.resolve(weatherData) })
      );
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
    // expect(global.fetch).toHaveBeenNthCalledWith(2,
    //     `https://api.openweathermap.org/data/2.5/weather?lat=${ipData.latitude}&lon=${ipData.longitude}&appid=${API_KEY_WEATHER}`,
    //     {
    //         method: "GET",
    //     }
    // );
  });
});
