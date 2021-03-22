const Telegraf = require('telegraf')
const session = require('telegraf/session')
const RedisSession = require('telegraf-session-redis')

const fs = require('fs')
//const json = require('./data.json')

require('dotenv').config()


const bot =  new Telegraf(process.env.TELEGRAF_API_KEY)



bot.use(session())



function UserSession(userInfo)
{
    userInfo.session.counter = userInfo.session.counter || 0
    userInfo.session.counter++

    //console.log(userInfo.from)
    console.log(userInfo.session.counter)
   // console.log(userInfo.message.from.id)


    console.log(JSON.stringify(userInfo.message, null, 2))

    fs.appendFile('./data.json',JSON.stringify(userInfo.message, null, 2), (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('File succesfully writtern!')
        }
    })


}


bot.start((ctx) => {
    ctx.reply("Hello "+  getName(ctx.from)+"!  \nWecome to Telegram TechInt Bot")

    ctx.reply("What can this bot do? \n\nYou can use these commands to  control me: \n/start - Start the bot\n/Questions - Ask me questions about myself.\n/currentUser - Some information about the current user.\n/help - Show this help page.")

    UserSession(ctx)


})


bot.help((ctx) => {
    ctx.reply("Command reference:\n/start - Start the bot\n/Questions - Ask me questions about myself.\n/currentUser - Some information about the current user.\n/help - Show this help page.")
})

bot.on('sticker',(ctx) => {
    ctx.reply("Cool Sticker")
})



//===============Function=====================
function getName(user) {
	return user.first_name
}


bot.hears('hello', (ctx) => {
    ctx.reply("Hello Sir, How are you ")
})



bot.command('currentUser', (ctx) => {
    ctx.reply("Name: "+ctx.message.from.first_name +"\nLast Name: "+ctx.message.from.last_name+"\nLanguage code: "+ctx.message.from.language_code)
    console.log(ctx.message)
})


//============== Interactive menu  --Asking Questions ======================

bot.command('Questions',(ctx) => {
    UserSession(ctx)
    bot.telegram.sendMessage(ctx.chat.id, "What would you like to know?",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Who created you?', callback_data: 'creator'}
                ],
                [
                    {text: 'When were you created?', callback_data: 'creation_date'}
                ],
                [
                    {text: 'Where can I find your source code?', callback_data: 'source_code'}
                ]
            ]
        }
    })

    
 
})

bot.action('creator', (ctx) =>{

    
    bot.telegram.sendMessage(ctx.chat.id, 'I was created by Velisa Nomfula', 
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Go back to the menu?', callback_data: 'menu'}
                ]
            ]
        }
    });

  
})

bot.action('creation_date', (ctx) =>{
  
    bot.telegram.sendMessage(ctx.chat.id, 'I was created on the 17st of March 2021', 
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Go back to the menu?', callback_data: 'menu'}
                ]
            ]
        }
    });

   
})

bot.action('source_code', (ctx) =>{
    
    bot.telegram.sendMessage(ctx.chat.id, '-You can find my source code from https://github.com/VelisaNomfula/ GitHub repository \n-The name of the repository is called aweson_velisa_bot \n-The README.md file is also provided to guide you on how to use me', 
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Go back to the menu?', callback_data: 'menu'}
                ]
            ]
        }
    });

    
})

bot.action('menu',(ctx) => {
   
    bot.telegram.sendMessage(ctx.chat.id, "What would you like to know?",
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: 'Who created you?', callback_data: 'creator'}
                ],
                [
                    {text: 'When were you created?', callback_data: 'creation_date'}
                ],
                [
                    {text: 'Where can I find your source code?', callback_data: 'source_code'}
                ]
            ]
        }
    })

    
 
})



bot.launch()