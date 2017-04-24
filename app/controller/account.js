var User = require('../model/User.js'), IndexController = require('./index.js');

module.exports = class AccountController extends IndexController {
	post(r, action){
		var user = new User(r.body);
		user[action](
			function(error, message){
				r.json({ error, message })
			},
			function(){
				// 
			}
		);
	}
}