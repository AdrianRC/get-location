let arc = require("@architect/functions");
const axios = require("axios");

exports.handler = async function http(req) {
  let countryCode = "NL";
  try {
    const { data } = await axios.get("https://freegeoip.app/json/");
    countryCode = data.country_code;
  } catch (e) {
    console.log("error", e);
    return {
      headers: {
        "content-type": "application/json; charset=utf8",
        "cache-control":
          "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      },
      statusCode: 500,
      body: { error: JSON.stringify(e) },
    };
  }
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    statusCode: 200,
    body: `{country: ${countryCode}}`,
  };
};
