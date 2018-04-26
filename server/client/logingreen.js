exports.submit = async (session, models, vars) => {
    await session.transform['6022'].update('logingreen', models.logingreen);
    await session.transform['6022'].action('logingreen', 'submit');
};