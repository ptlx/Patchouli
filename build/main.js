"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.once("ready", async () => {
    const data = [{
            name: "ping",
            description: "initial command",
        }];
    await client.application.commands.set(data);
    console.log("Ready!");
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand())
        return;
    if (interaction.commandName === 'ping') {
        await interaction.reply('pong!!');
    }
});
require('dotenv').config();
client.login(process.env.TOKEN);
