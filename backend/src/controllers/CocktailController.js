const baseurl = require('../database/baseurl');

module.exports = {
  async listCategories(req, res) {
    try {
      baseurl.get('/list.php?c=list')
        .then(function (response) {
          res.status(200).json(response.data)
        })
    } catch (error) {
      res.status(400).json({ error: 'Failed to listing categories !' })
    }
  },

  async listCategoryItems(req, res) {
    const category = req.query.category;

    switch (category) {
      case 'OrdinaryDrink': {
        baseurl.get('/filter.php?c=Ordinary_Drink')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Cocktail': {
        baseurl.get('/filter.php?c=Cocktail')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Milk/Float/Shake': {
        baseurl.get('filter.php?c=Milk%20/%20Float%20/%20Shake')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Other/Unknown': {
        baseurl.get('filter.php?c=Other/Unknown')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Cocoa': {
        baseurl.get('filter.php?c=Cocoa')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Shot': {
        baseurl.get('filter.php?c=Shot')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Coffee/Tea': {
        baseurl.get('filter.php?c=Coffee%20/%20Tea')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'HomemadeLiqueur': {
        baseurl.get('filter.php?c=Homemade_Liqueur')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Punch/PartyDrink': {
        baseurl.get('filter.php?c=Punch%20/%20Party%20Drink')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'Beer': {
        baseurl.get('filter.php?c=Beer')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      case 'SoftDrink/Soda': {
        baseurl.get('filter.php?c=Soft%20Drink%20/%20Soda')
          .then(function (response) {
            res.status(200).json(response.data)
          })
        break;
      }

      default: {
        res.status(400).json({ message: "Nothing found" })
      }
    }
  },

  async mainSearch(req, res) {
    const inputValue = req.body.searchInputValue;
    const typeValue = req.body.searchTypeValue;

    switch (typeValue) {
      case 'name':
        try {
          baseurl.get(`/search.php?s=%${inputValue}%`)
            .then(function (response) {
              const results = response.data.drinks || [];

              if (results.length > 0) {
                const data = results.map(item => {
                  return {
                    id: item.idDrink,
                    name: item.strDrink,
                    category: item.strCategory,
                    alcoholic: item.strAlcoholic,
                    glass: item.strGlass,
                    instructions: item.strInstructions,
                    image: item.strDrinkThumb,
                    ingredients: {
                      ingredient1: item.strIngredient1,
                      ingredient2: item.strIngredient2,
                      ingredient3: item.strIngredient3,
                      ingredient4: item.strIngredient4,
                      ingredient5: item.strIngredient5,
                      ingredient6: item.strIngredient6,
                      ingredient7: item.strIngredient7,
                      ingredient8: item.strIngredient8,
                      ingredient9: item.strIngredient9,
                    },
                    measures: {
                      measure1: item.strMeasure1,
                      measure2: item.strMeasure2,
                      measure3: item.strMeasure3,
                      measure4: item.strMeasure4,
                      measure5: item.strMeasure5,
                      measure6: item.strMeasure6,
                      measure7: item.strMeasure7,
                      measure8: item.strMeasure8,
                      measure9: item.strMeasure9,
                    }
                  }
                })
                return res.status(200).json(data)
              } else {
                return res.status(400).json({ message: 'No drinks found...' })
              }
            })
        } catch (error) {
          return res.status(400).json({ error: 'Failed trying list items by name' })
        }

        break;

      case 'firstletter':
        try {
          baseurl.get(`/search.php?f=${inputValue}`)
            .then(function (response) {
              const results = response.data.drinks || [];

              if (results.length > 0) {
                const data = results.map(item => {
                  return {
                    id: item.idDrink,
                    name: item.strDrink,
                    category: item.strCategory,
                    alcoholic: item.strAlcoholic,
                    glass: item.strGlass,
                    instructions: item.strInstructions,
                    image: item.strDrinkThumb,
                    ingredients: {
                      ingredient1: item.strIngredient1,
                      ingredient2: item.strIngredient2,
                      ingredient3: item.strIngredient3,
                      ingredient4: item.strIngredient4,
                      ingredient5: item.strIngredient5,
                      ingredient6: item.strIngredient6,
                      ingredient7: item.strIngredient7,
                      ingredient8: item.strIngredient8,
                      ingredient9: item.strIngredient9,
                    },
                    measures: {
                      measure1: item.strMeasure1,
                      measure2: item.strMeasure2,
                      measure3: item.strMeasure3,
                      measure4: item.strMeasure4,
                      measure5: item.strMeasure5,
                      measure6: item.strMeasure6,
                      measure7: item.strMeasure7,
                      measure8: item.strMeasure8,
                      measure9: item.strMeasure9,
                    }
                  }
                })
                return res.status(200).json(data)
              } else {
                return res.status(400).json({ message: 'No drinks found...' })
              }
            })
        } catch (error) {
          return res.status(400).json({ error: 'Failed trying list items by name' })
        }
        break;

      case 'ingredientname':
        try {
          baseurl.get(`/filter.php?i=${inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}`)
            .then(function (response) {
              const results = response.data.drinks || [];

              if (results.length > 0) {
                const data = results.map(item => {
                  return {
                    id: item.idDrink,
                    name: item.strDrink,
                    image: item.strDrinkThumb,
                  }
                })
                return res.status(200).json(data)
              }
            })
        } catch (error) {
          return res.status(400).json({ error: 'Failed trying list items by name' })
        }
        break;

      case 'random':
        try {
          baseurl.get(`/random.php`)
            .then(function (response) {
              const results = response.data.drinks || [];

              if (results.length > 0) {
                const data = results.map(item => {
                  return {
                    id: item.idDrink,
                    name: item.strDrink,
                    category: item.strCategory,
                    alcoholic: item.strAlcoholic,
                    glass: item.strGlass,
                    instructions: item.strInstructions,
                    image: item.strDrinkThumb,
                    ingredients: {
                      ingredient1: item.strIngredient1,
                      ingredient2: item.strIngredient2,
                      ingredient3: item.strIngredient3,
                      ingredient4: item.strIngredient4,
                      ingredient5: item.strIngredient5,
                      ingredient6: item.strIngredient6,
                      ingredient7: item.strIngredient7,
                      ingredient8: item.strIngredient8,
                      ingredient9: item.strIngredient9,
                    },
                    measures: {
                      measure1: item.strMeasure1,
                      measure2: item.strMeasure2,
                      measure3: item.strMeasure3,
                      measure4: item.strMeasure4,
                      measure5: item.strMeasure5,
                      measure6: item.strMeasure6,
                      measure7: item.strMeasure7,
                      measure8: item.strMeasure8,
                      measure9: item.strMeasure9,
                    }
                  }
                })
                return res.status(200).json(data)
              } else {
                return res.status(400).json({ message: 'No drinks found...' })
              }
            })
        } catch (error) {
          return res.status(400).json({ error: 'Failed trying list items by name' })
        }
        break;

      default:
        return res.status(400).json({ message: 'Fail to list Drinks' })

    }
  },

  async searchById(req, res) {
    const idDrink = req.query.idDrink;

    baseurl.get(`/lookup.php?i=${idDrink}`)
      .then(function (response) {
        const results = response.data.drinks || [];

        if (results.length > 0) {
          const data = results.map(item => {
            return {
              id: item.idDrink,
              name: item.strDrink,
              category: item.strCategory,
              tags: item.strTags,
              alcoholic: item.strAlcoholic,
              glass: item.strGlass,
              instructions: item.strInstructions,
              image: item.strDrinkThumb,
              ingredientsAndMeasures: {
                ingredient1: [item.strMeasure1, item.strIngredient1],
                ingredient2: [item.strMeasure2, item.strIngredient2],
                ingredient3: [item.strMeasure3, item.strIngredient3],
                ingredient4: [item.strMeasure4, item.strIngredient4],
                ingredient5: [item.strMeasure5, item.strIngredient5],
                ingredient6: [item.strMeasure6, item.strIngredient6],
                ingredient7: [item.strMeasure7, item.strIngredient7],
                ingredient8: [item.strMeasure8, item.strIngredient8],
                ingredient9: [item.strMeasure9, item.strIngredient9],
                ingredient10: [item.strMeasure10, item.strIngredient10],
                ingredient11: [item.strMeasure11, item.strIngredient11],
                ingredient12: [item.strMeasure12, item.strIngredient12],

              },
            }
          })
          return res.status(200).json(data)
        }
      })
  },
}