import PouchDB from "pouchdb"
import auth from "pouchdb-authentication"

PouchDB.plugin(auth)

export let db =  new PouchDB("http://fortress88.servebeer.com:5984/jung") 
export let tasks = new PouchDB("http://fortress88.servebeer.com:5984/tasks") 
export let achievements = new PouchDB("http://fortress88.servebeer.com:5984/achievements") 
