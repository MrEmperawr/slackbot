const axios = require('axios')

const quoteMe = async (bot) => {
    try {
        const res = await axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
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
    }
    catch (error) {
        console.log(error)
    }
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

const starwarsFilms = (bot) => {
    axios.get('https://raw.githubusercontent.com/BolajiAyodeji/inspireNuggets/master/src/quotes.json')
      .then(res => {
            const films = res.results
            const randomPick = Math.floor(Math.random() * films.length)
            const film = films[randomPick].title
            const openingCrawlText = films[randomPick].opening_crawl
            const director = films[randomPick].director
            const params = {
                icon_emoji: ':male-technologist:'
            }            
            bot.postMessageToChannel(
                'random',
                `:zap: Here's a Star Wars film for you: *${film}* - ${openingCrawlText} \n Directed by: ${director}`,
                params
            )

      }).catch(error => console.log(error))
}

module.exports = {
      quoteMe,
      runHelp,
      starwarsFilms
}