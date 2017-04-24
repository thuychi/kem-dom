var { DOM, Modal } = require('kem/dom');
var getUserMedia = require('kem/lib/user-media');

module.exports = class Camera extends Modal {

	constructor(props) {
		super(props);

		var default_value = {
			video: { width: 1280, height: 720 },
			audio: true,
			button: { record: true, photo: true, call: true, live: true }
		};

		this.props = props ? Object.assign(default_value, props) : default_value;

		this.state = { photo: null };
	}

	take_photo() {
		// var cv = this.find('canvas'), video = this.find('video');
		// var ctx = cv.getContext('2d');
		// var width = video.width, height = video.height;

		// cv.width = width;
		// cv.height = height;

		// ctx.drawImage(video, 0, 0);

		// video.css({display: 'none'});
	}

	section() {
		var prop = this.props,
		    self = this;

		return DOM.createElement(
			'section',
			null,
			DOM.createElement(
				'div',
				null,
				DOM.createElement(
					'video',
					{ style: 'width: 100%; height: 100%;' },
					function (video) {
						getUserMedia({ video: prop.video, audio: true }).then(function (stream) {
							video.src = URL.createObjectURL(stream);
							video.play();
						}).catch(function (e) {
							console.log(e);
						});
					}
				)
			),
			DOM.createElement(
				'div',
				null,
				prop.button.photo ? DOM.createElement(
					'button',
					{ onclick: this.take_photo.bind(this) },
					'Photo'
				) : null,
				prop.button.record ? DOM.createElement(
					'button',
					null,
					'Record'
				) : null,
				prop.button.call ? DOM.createElement(
					'button',
					null,
					'Call'
				) : null,
				prop.button.live ? DOM.createElement(
					'button',
					null,
					'Live'
				) : null
			)
		);
	}
};