import axios from "axios";
export default {
  // Get all Entries
  getAll: function() {
    return axios.get("/api/entry/view");
  },
  // Get Entries for a specific range
  getRange: function(startDate, endDate) {
    return axios.get(`/api/entry/?startDate=${startDate}&endDate=${endDate}`)
  },
  // Saves an Entry to the database
  createEntry: function(Entry) {
    return axios.post("api/entry/create", Entry);
  },
  // Get an Entry for a specific date
  getByDate: function(date) {
    return axios.get("api/entry/" + date)
  },

  // Scrape function
  scrape: function() {
  return axios.get(`/scrape/`)
  }

};
