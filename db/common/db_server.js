require('dotenv').config();

var env = process.env;

const { MongoClient } = require("mongodb");

var mon_db = null ;

 const link_db = {
    conn:()=>
    {
        const uri = env.DB_URL;
        const db_name = env.DB_NAME;    
        const client = new MongoClient(uri);
        mon_db = client.db(db_name);
    },
    link_table:(table_name)=>
    {
        if(mon_db != null) return mon_db.collection(table_name)
    } 
 }

module.exports = {link_db};
