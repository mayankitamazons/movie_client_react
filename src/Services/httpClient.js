
// base url
export const Base_URL = "http://127.0.0.1:3200/v1/";

// GET api call
export async function GET(relativeUrl, data) {
  let url = Base_URL + relativeUrl;
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
     // Authorization: `Bearer ${await getData(ACCESS_TOKEN)}`,
      data: JSON.stringify(data),
    };
    const re = await fetch(url, requestOptions)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        },
        (error) => {
          return error;
        }
      );
    return re;
  } catch (error) {
    if (error.response) {
      return error.response;
    } else if (error.request) {
      return error;
    } else {
      return error;
    }
  }
}
