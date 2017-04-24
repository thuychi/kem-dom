var UserAgent = require('kem/other/user-agent');

module.exports = class IndexController {
	get(r){
		if(!r.cookie.has('device')) r.cookie.set({device: UserAgent(r.header('user-agent'))});

		r.html('index', Object.assign(r.cookie.data, {
			asset: 'http://localhost'
		}));
	}
}