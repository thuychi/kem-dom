require('./config.js');

var app = require('kem').Server(require('http')), load = require('kem/load');

// using cookie
app.use(require('kem/use/cookie'));
// using body-parser
app.use(require('kem/use/body'));

app.use('/file/([0-9a-z]+)', load.controller('file'));
app.use('/asset/(.+)', load.controller('asset'));
app.use('/account/(login|register|recover|confirm)', load.controller('account'));
app.use('.*', load.controller('index'));