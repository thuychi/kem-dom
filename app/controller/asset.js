var fs = require('fs'), 
	async = require('kem/lib/async.js'),
	content_type = require('kem/other/content-type.js'), 

	dirname = process.env.public, 
	dev = process.env.dev, 
	cache = {};

function get_text(path){
	return fs.existsSync(path) ? fs.readFileSync(path) : '';
}

module.exports = class AssetController {
	get(r, pathname){
		var type = content_type[pathname.split('.').pop()], 
			path = [dirname, pathname].join('/');

		if(!type) return r.end();

		r.header('Content-Type', type);

		if(dev) return r.end(get_text(path));

		if(!cache.hasOwnProperty(path)) cache[path] = get_text(path);

		r.end(cache[path]);
	}
}