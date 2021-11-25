import { getIpData } from "./getIpData";

describe("getIpData", () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("get object with IP", async () => {
    const ipName = "Ip";
    const ip = "188.65.233.214";
    const ipObj = { [ipName]: ip };

    global.fetch.mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(ipObj) })
    );

    const data = await getIpData();

    expect(global.fetch).toHaveBeenCalledWith("https://ipapi.co/json/", {
      method: "GET",
    });
    expect(data).toStrictEqual(ipObj);
  });
});
