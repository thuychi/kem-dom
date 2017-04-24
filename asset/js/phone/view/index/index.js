var { DOM, Link } = require('kem/dom');

module.exports = class Index extends DOM {
	render() {
		return DOM.createElement(
			"div",
			null,
			DOM.createElement(
				Link,
				{ to: "/account/login" },
				"Login"
			)
		);
	}
};