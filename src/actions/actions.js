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

const runHelp = (bot) => {
    const params = {
        icon_emoji: ':question:'
    }

    bot.postMessageToChannel(
        'random',
        `Type *@megatron* with *quote me* to get a sweet quote or  *help* to get this instruction again!`,
        params
    );
}

module.exports = {
      quoteMe,
      runHelp,
}