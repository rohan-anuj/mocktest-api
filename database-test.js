const sqlite=require("sqlite")
const sqlite3=require("sqlite3")

async function setup(){
    const db =await sqlite.open({filename:"database.json",driver:sqlite3.Database})
    db.migrate({
        migrationsPath:"./migrations/",
        force:"last"
    })
}
    
setup()



