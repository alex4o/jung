import { observable, computed, action } from "mobx"

export default class appStore {
    @observable username = "Masov Pederasov"

    constructor() {

    }

    @action setUsername(username){
        this.username = username;
    }
}