const SlackBot = require('slackbots')
const dotenv = require('dotenv')

const { quoteMe } = require('./src/quotes')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.SLACKBOT_API_TOKEN}`,
    name: 'megatron'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    // bot.postMessageToChannel(
    //     'random',
    //     'I am here to destroy the Autobots and look good while doing it. Also check out my patreon lol!',
    //     params
    // )

    quoteMe(bot)
})