const SlackBot = require('slackbots')
const dotenv = require('dotenv')

const { quoteMe, runHelp, starwarsFilms } = require('./src/actions')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.SLACKBOT_API_TOKEN}`,
    name: 'megatron'
})

const handleMessage = (message) => {

    switch (message) {}
    if(message.includes(' quote me')) {
        quoteMe(bot)
    } else if(message.includes(' help')) {
        runHelp(bot)
    } else if (message.includes(' star wars film please!')) {
        starwarsFilms(bot)
    } 
}

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'testchannel',
        'I am here to destroy the Autobots and look good while doing it. Also check out my patreon lol!',
        params
    )
})

bot.on('error', (err) => {
    console.log(err);
})

bot.on('message', (data) => {
    if (data.type !== 'message') return
    const message = data.text
    handleMessage(message)
})
