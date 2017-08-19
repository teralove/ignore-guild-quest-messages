// vers 1.0.0

module.exports = function IgnoreGuildQuestMessages(dispatch) {
    dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
        if (event.message.includes('@GuildQuest')) return false;
    })
}