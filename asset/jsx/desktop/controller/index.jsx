var {DOM} = require('kem/dom');

module.exports = class IndexController extends DOM {

	constructor(props) {
		super(props);
		this.state = {section: null};
	}
	
	index(){
		return require('../view/index/index.js');
	}

	render() {
		return (
			<div>
				{this.state.section}
			</div>
		)
	}
}