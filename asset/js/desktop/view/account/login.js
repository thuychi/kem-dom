var { DOM, Link } = require('kem/dom');

module.exports = class AccountController extends DOM {
	render() {
		return DOM.createElement(
			"div",
			null,
			DOM.createElement(
				Link,
				{ to: "/" },
				"Home"
			),
			DOM.createElement(
				Link,
				{ to: "/account/register" },
				"Register"
			)
		);
	}
};