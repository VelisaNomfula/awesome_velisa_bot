# awesome_velisa_bot
## Telegram Bot using NodeJS, Using Telegraf
* This repository lets you run and configure a Telegram bot.
* This bot is created using Telegraf NPM package, because it support it supported needed features to  make this bot  succesful, and has more information and better documentation.


## How to create this bot

Step 1: Create a 'user bot' and connect it with Node.js
* Open Telegram application on your computer;
* Contact BotFather through Telegram here: https://telegram.me/BotFather. This bot will be used to create your bot;
* ![Screenshot (10)](https://user-images.githubusercontent.com/61043154/111925313-056ff580-8ab1-11eb-9a17-a885d066dcd4.png)
* Following the steps on the image, BotFather will provide an API Key. 
* This API key is used to make requests to Telegram API in order to listen messages from your bot user, make bot answer accordingly and much more. Save it for next step

Step 2: Configure Node.js application 
* Create .env file and replace API_TOKEN with the Api key from BotFather. 
* TELEGRAF_API_KEY='API_TOKEN'
* This file will be automatically ignored from .gitignore to secure your API key in GitHub.
* Install dependencies:
* npm install
* This will install dependencies in package.

## Run the bot
* Start the application
* run node app.js
* The bot has started ...



## How to Use this Bot
 * Open you Telegram application on your computer
 * Search for "Telegram TechInt Bot"
 * Click "start" on the bot, you  will receive this message.
  ####  ![WhatsApp Image 2021-03-22 at 1 12 30 AM](https://user-images.githubusercontent.com/61043154/111924290-677a2c00-8aac-11eb-8707-41202e3b30cc.jpeg)
  
  * You get options to ask questions, by  clicking /Questions or /help to see commands to  run on  the bot
  * After clicking option (/Questions), you get simple questions this bot can answer
  * Questions are listen as an inline keyboard, when you click the question the bot would respond to that specific question
  * Example of the questions and answers this bot can answer:
![WhatsApp Image 2021-03-22 at 1 31 28 AM](https://user-images.githubusercontent.com/61043154/111924689-6b0eb280-8aae-11eb-851a-01d6163823a0.jpeg)


## How to deploy this bot to AWS

### Step 1: Create account on aws

* Go to https://www.aws.com, then create an account on aws
* If already have an account, Go to aws console.
### Step 2: Launch an EC2 instance

* Create the role:
  * Go to IAM Dashboard, create role (EC2 role)
  * give permission to AutoScalingFullAccess
  * Then click create the role
* Go to EC2 dashboard, Under auto  scaling select Launch configuration
* Create Launch configuration
* Select the role created
* For amazon machine image, stick with Ubuntu 18.4
* You can click next and leave all other steps as default
  * Under user data create insert shell commands to  install packages on your instances
  * Install node.js and other packages
   ```
   #!/bin/bash
   sudo apt-get install git
   git clone https://github.com/VelisaNomfula/awesome_velisa_bot.git
   npm install
   node app.js
   npm install pm2 -g
   sudo pm2 start app.js
   ```
   
* For configure security group, open port 22.
* Click Launch, create key pair and save it on your machine.
* Create Auto  Scaling group for the configuration, select a subnet then create.

## The Architecture for the whole process is shown below:-
![updated](https://user-images.githubusercontent.com/61043154/111972190-da63c100-8b05-11eb-9d00-a55bc14ab160.PNG)


