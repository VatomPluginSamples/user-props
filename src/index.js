/***/
// Load from spaces storage approach
module.exports = class UserPropsPlugin extends BasePlugin {
/***
// Localhost server approach
import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'
export default class UserPropsPlugin extends BasePlugin {
/***/

	static id = "user-props-plugin"
	static name = "user-props-plugin"
	static description = "user-props-plugin Description goes here."

	onLoad() {
		// Create a button in the toolbar
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Log User Props',
			action: () => this.onButtonPress()
		})
	}

	/** Called when the user presses the action button */
	async onButtonPress() {
		const userRole = await this.user.getProperties('');
		//const userRole = await this.user.getProperties('brapm9i');
		console.log('Role***');
		console.log(userRole);
		// Show alert
		//this.menus.alert(`Hello from ${this.constructor.name} version ${require('../package.json').version}!`, 'Hello world!', 'info')
	}

}// class UserPropsPlugin
