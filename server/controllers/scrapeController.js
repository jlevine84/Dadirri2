const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  scrape: function(req, res){
      const articles=[]
      axios.get("https://www.sciencedaily.com/news/mind_brain/mental_health/").then(response => {
        const $ = cheerio.load(response.data);
        $("div.col-sm-6").each((i, element) => {
        const result = {
          title: $(element).find('h3').text(),
          link: $(element).find('a').attr('href'),
          };
        articles.push(result)
        });
        res.json(articles)
      });
  }
}