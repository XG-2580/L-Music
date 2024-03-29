const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "shuffle",
    aliases: ["mix"],
    description: "Shuffles the current queue.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        await queue.shuffle();
        let embed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
            .setDescription(`**Song has been shuffled**`);

        message.reply({ embeds: [embed] });
    }
}