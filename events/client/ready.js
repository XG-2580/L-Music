const { ActivityType } = require("discord.js");

module.exports = async (client) => {
  try {
    client.logger.info(`${client.user.username} is now ready`, { label: `Ready` });

    if (client.config.dashboard.enabled && !client.spawned) {
      client.dashboard.load(client);
    }

    // Fetch guild and user counts asynchronously
    const fetchCounts = async () => {
      await client.guilds.fetch();
      await client.users.fetch();
      return {
        guilds: client.guilds.cache.size,
        users: client.users.cache.size
      };
    };

    // Set up initial activities
    const { guilds, users } = await fetchCounts();
    const activities = [
      `${client.config.prefix}help | ${guilds} servers`,
      `${client.config.prefix}play | ${users} users`,
    ];

    // Update activities at intervals
    setInterval(async () => {
      try {
        const { guilds, users } = await fetchCounts();
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(`${randomActivity}`, { type: ActivityType.Watching });
      } catch (error) {
        client.logger.error(`Error updating activity: ${error.message}`, { label: `ActivityUpdate` });
      }
    }, Number(client.config.activityInterval) * 1000);
  } catch (error) {
    client.logger.error(`Error in ready event: ${error.message}`, { label: `ReadyEventError` });
  }
};
