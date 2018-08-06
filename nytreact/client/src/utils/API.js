import axios from "axios"

export default {
    getArticles: function(topic, startYear, endYear) {
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=304fa3fe81e44dc5a4950d7dddf66075&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL)
    }
  };

  