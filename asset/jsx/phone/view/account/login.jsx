var {DOM, Link} = require('kem/dom');

module.exports = class AccountController extends DOM {
	render(){
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/account/register">Register</Link>
			</div>
		)
	}
}