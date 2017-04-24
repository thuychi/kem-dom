require('kem/dom/prototype');

var {cookie, app} = require('kem/dom');

app.use(function(next){
	if(!cookie.has('user')) next();
	else console.log('disabled');
});

app.use('/', require('./controller/index'));
app.use('/account/([a-z]+)', require('./controller/account'));

app.handle();

module.exports = app;