const axios = require('axios')

const quoteMe = (bot) => {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
      .then(res => {
            const quotes = res.data
            const randomPick = Math.floor(Math.random() * quotes.length)
            const quote = quotes[randomPick].quote
            const author = quotes[randomPick].author
            const params = {
                icon_emoji: ':male-technologist:'
            }            
            bot.postMessageToChannel(
                'random',
                `:zap: ${quote} - *${author}*`,
                params
            )

      }).catch(error => console.log(error))
}

module.exports = {
      quoteMe
}