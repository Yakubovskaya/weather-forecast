import { getCityInputWeather } from "./getCityInputWeather";

describe("getCityInputWeather", () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("function calls fetch and returns the weather data", async () => {
    const cityName = "Moscow";
    const description = "clear sky";
    const icon = "01d";
    const temp = 282.55;
    const API_KEY_WEATHER = "b071b1f9cb6a205c491857b865f1bf99";
    const data = {
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

    global.fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(data) })
    );

    const res = await getCityInputWeather(cityName);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_WEATHER}`,
      {
        method: "GET",
      }
    );
    expect(res).toStrictEqual(data);
  });
});
