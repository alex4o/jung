import { observable, computed, action } from "mobx"

export default class appStore {
    @observable username = "Ivan Ivanov"

    constructor() {

    }

    @action setUsername(username){
        this.username = username;
    }
}