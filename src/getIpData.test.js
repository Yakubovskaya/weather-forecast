import { getIpData } from "./getIpData";

describe("getIpData", () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("getIpData calls fetch and returns the user location", async () => {
    const lon = 30.2618;
    const lat = 59.8983;
    const ipObj = { lon, lat };

    global.fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(ipObj) })
    );

    const res = await getIpData();

    expect(global.fetch).toHaveBeenCalledWith("https://ipapi.co/json/", {
      method: "GET",
    });
    expect(res).toStrictEqual(ipObj);
  });
});
