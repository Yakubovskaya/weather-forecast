export async function getIpData() {
  const ipData = await fetch("https://ipapi.co/json/", {
    method: "GET",
  }).then((response) => response.json());
  return ipData;
}
