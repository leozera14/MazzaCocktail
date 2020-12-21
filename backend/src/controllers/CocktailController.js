const baseurl = require('../database/baseurl');

module.exports = {
  async listCategory(req, res) {
    const category = req.query.category;

    switch(category) {
      case 'O': {
        baseurl.get('/filter.php?c=Ordinary_Drink')
        .then(function(response) {
          res.status(200).json(response.data)
        })
        break;
      }

      case 'C': {
        baseurl.get('/filter.php?c=Cocktail')
        .then(function(response) {
          res.status(200).json(response.data)
        })
        break;
      }

      default: {
        res.status(400).json({ message: "Nothing found"})
      }
    }
  }
}