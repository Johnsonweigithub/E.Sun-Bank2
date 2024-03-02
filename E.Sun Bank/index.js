const fs = require('fs')
const path = require('path')
const Sequqlize = require('Sequqlize')
const config = require('../config/config')
const db={}
import initSqlJs from "sql.js"
// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "!!url-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm"; 

const Sequqlize = new Sequqlize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

modle.exports = db

fs
    .readdirSync(__dirname)
    .filter((file)=>{
        const model = Sequelize.import(path.join(__dirname,file))
        db[model.name] = model
    })

export default{
    name: 'login',
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        login(){
            console.log(this.username)
            console.log(this.passeord)
        }
    }
}

module.exports = {
    chainWebpack: config => {
        config.module.rule('wasm').test(/\.wasm$/).type('javascript/auto')
    }
 } 

 async function loadDB() {
    try {
        const SQL = await initSqlJs({
            locateFile: () => sqlWasm
        });
        return new SQL.Database()
    } catch (err) {
        console.log(err);
    }
 }
 loadDB().then(db => app.config.globalProperties.$db = db)

 const stmt = this.$db.prepare("SELECT PhoneNumber,UserPassword FROM LibraryUser"); 