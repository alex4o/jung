import { observable, computed, action } from "mobx"
import { db } from "../stores/db"
import { notification } from 'antd'

export default class appStore {
	@observable username = "Default User"
	@observable totalExp = 0
	@observable expToNextLevel = 0
	@observable level = 1
	@observable loggedIn = false;

	constructor() {

	}

	@computed get progress() { 
		return this.totalExp / (this.expToNextLevel + 1)
	}

	/** TODO: Write Logout and connect it with the router  */
	@action async login(username, password) {
		try {
			let response = await db.logIn(username, password)
			this.username = response.name

			let user = await db.getUser(username)
			this.totalExp = user.totalExp | 0
			this.expToNextLevel = user.expToNextLevel | 0
			this.level = user.level | 0
			this.loggedIn = true;
		} catch (error) {
			console.error(error)
		};
	}

	@action async logout() {
		try {
			let response = await db.logOut()

			this.username = "Default User"
			this.totalExp = 0
			this.expToNextLevel = 0
			this.level = 1
			this.loggedIn = false;
			
		} catch (error) {
			console.error(error)
		};
	}

	@action async addExp(exp) {

		console.log("Add exp: ", exp, this)

		this.totalExp += exp
		if (this.totalExp > this.expToNextLevel) {
			this.totalExp = 0
			this.level += 1
			this.expToNextLevel = 150 * this.level + 30
			notification.info({
				message: "Congratulations!",
                description: `You have reached level ${this.level}, keep it up.`,
                placement: "bottomRight"
			})
		}

		await db.putUser(this.username, {
			metadata: {
				level: this.level,
				totalExp: this.totalExp,
				expToNextLevel: this.expToNextLevel
			}
		})
	}
}