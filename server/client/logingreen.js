const trigger = require('smartux-connect').trigger;
exports.submit = async (session, models, vars) => {
    await session.transform['6022'].update('logingreen', models.logingreen);
    await session.transform['6022'].action('logingreen', 'submit');
};
trigger({
    id: 'client.start',
    events: ['client.start']
}, async (session, models, vars) => {
});