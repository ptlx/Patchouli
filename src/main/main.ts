import { CommandInteraction/*,Message*/ } from "discord.js";
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
import { checkEmergencyContact } from "../checkEmergencyContact/index"

client.once("ready", async () => {
    // （スラッシュ）コマンドの配列。これを最初にsetしている。
    //  コマンドの規模が大きくなったらjsonに格納してそれをsetするようにしようかなと考えている。
    const data = [{
        name: "ping",
        description: "initial command",
        "options": [
            {
                "name": "arg",
                "description": "test",
                "type": 3,
                "required": true,
                "choices": [
                    {
                        "name": "4S",
                        "value": "4Sno"
                    }
                ]
            }
        ]
    },{
        name: "emergency",
        description: "see nitkc's emergency contact",
    }];
    await client.application.commands.set(data/*, process.env.SERVER_ID*/);
    console.log("Ready!");
});


client.on("interactionCreate", async (interaction: CommandInteraction) => {
    // console.log(interaction.options.data);
    if (!interaction.isCommand()) return;

    const optionData = interaction.options.data[0]
    // optionData.value: string | number | boolean | undefined
    if (!optionData.value) return;
    // optionData.value: string | number | true

    if (interaction.commandName === 'emergency') {
        const contact: string = await checkEmergencyContact()
        // console.log(contact)
        await interaction.reply(contact ? contact : "緊急連絡が見つからなかったようね。");

    }
    if (interaction.commandName === 'ping'){
        await interaction.reply("pong");
    }
});

/*
client.on('messageCreate', (message: Message) => {
    if (message.author.bot) return;
    message.channel.send("テスト");
});

*/
  
  require('dotenv').config();
  client.login(process.env.TOKEN);