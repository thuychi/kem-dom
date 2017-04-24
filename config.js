process.env = {

	"dev": false,

	"host": "localhost",
	"port": 3000,

	"app": __dirname + "/app",
	"public": __dirname + "/public",
	"view": "file://" + __dirname + "/index.html",
	"device": {
		"iphone5": {"width": 320, "height": 568}
	},
	"socket": __dirname + "/socket",

	"mongodb": {
		"url": "localhost:27017/tim",
		"option": {}
	},
	"redis": {
		"host": "127.0.0.1",
		"port": 6379,
		"auth": "6eeb73df91baf0106f3322fb4a5440cda1b04b88",
		"option": {
			"detect_buffers": true
		},
		"table": [0, "login", "follow", "chat"]
	},
	"secret": new Buffer(JSON.stringify({ key: 'value' }), 'base64')
}