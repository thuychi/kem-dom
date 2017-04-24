var file = require('kem/db/mongo/file');

module.exports = class FileController {
	get(r, id){
		if(id.length !== 24) return r.end();
		
		file.read(id, function(content_type, stream){
			if(!stream) return r.end();

			r.header('Content-Type', content_type);
			stream.pipe(r.res);
		})
	}

	post(r, id){
		file.write(r.bin, r.header('content-type'), r.query, function(filename){
			r.end(filename)
		})
	}
}