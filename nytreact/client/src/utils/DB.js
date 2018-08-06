import axios from "axios"

export default {
    get: function() {
      return axios.get("/api/articles");
    },
    delete: function(id) {
      return axios.delete("/api/articles/" + id);
    },
    save: function(articleData) {
      return axios.post("/api/articles", articleData);
    }
  };