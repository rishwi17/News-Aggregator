const axios = require("axios");

async function getNews() {
  var result = await axios.get("https://newsapi.org/v2/top-headlines", {
    params: {
      country: "in",
      apiKey: "9ad6a21779da47c28dde78964e668571",
      sortBy: "popularity",
    },
  });

  return result.data.articles.map(({ author, title }) => ({ author, title }));
}

export default getNews;
