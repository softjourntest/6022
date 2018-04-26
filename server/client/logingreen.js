const trigger = require('smartux-connect').trigger;
exports.submit = async (session, models, vars) => {
    await session.transform['6022'].update('logingreen', models.logingreen);
    await session.transform['6022'].action('logingreen', 'submit');
};
trigger({
    id: 'client.start',
    events: ['client.start']
}, async (session, models, vars) => {
    session.call('', session, models, vars);
    await session.updateUserInfo();
    await session.transform['6022'].close();
    await session.transform['6022'].evalSync();
    await session.transform['6022'].screenshot();
});