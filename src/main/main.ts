import { CommandInteraction/*,Message*/ } from "discord.js";
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
import { checkEmergencyContact } from "../checkEmergencyContact/index"
import { commands } from "./commands";

client.once("ready", async () => {
    await client.application.commands.set(commands/*, process.env.SERVER_ID*/);
    console.log("Ready!");
});

client.on("interactionCreate", async (interaction: CommandInteraction) => {
    // console.log(interaction.options.data);
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'emergency') {
        const contact: string = await checkEmergencyContact()
        await interaction.reply(contact ? contact : "緊急連絡が見つからなかったようね。");
    }

    if (interaction.commandName === 'ping'){
        const arg = interaction.options.data[0]
        if (!arg.value) return;
        // arg.value: string | number | true
        await interaction.reply(arg.value.toString());
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