var {DOM} = require('kem/dom');

module.exports = class AccountController extends DOM {

	constructor(props) {
		super(props);
		this.state = {section: null};
	}
	
	login(){
		return require('../view/account/login');
	}
	
	register(){
		return require('../view/account/register');
	}

	render() {
		return (
			<div>
				{this.state.section}
			</div>
		)
	}
}