var {DOM, Link} = require('kem/dom');

module.exports = class Index extends DOM {
	render() {
		return (
			<div>
				<Link to="/account/login">
					Login
				</Link>
			</div>
		)
	}
}