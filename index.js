const SlackBot = require('slackbots')
const dotenv = require('dotenv')

const { quoteMe, runHelp } = require('./src/actions')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.SLACKBOT_API_TOKEN}`,
    name: 'megatron'
})

const handleMessage = (message) => {
    if(message.includes(' quote me')) {
        quoteMe(bot)
    } else if(message.includes(' help')) {
        runHelp(bot)
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

// bot.on('error', (err) => {
//     console.log(err);
// })

// Message Handler
bot.on('message', (data) => {
    if (data.type !== 'message') return
    console.log(data.text)
    const message = data.text
    handleMessage(message)
})
