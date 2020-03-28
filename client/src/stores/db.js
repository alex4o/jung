import PouchDB from "pouchdb"

export default new PouchDB("http://fortress88.servebeer.com:5984/jung") 
export let tasks = new PouchDB("http://fortress88.servebeer.com:5984/tasks") 