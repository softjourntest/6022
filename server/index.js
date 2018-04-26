const session = require('smartux-connect');
session.transform['6022'] = session.loadTransform('6022');
require('./client');
require('./client/logingreen');
session.start();