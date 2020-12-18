// DB の connect 処理をモジュールにして読み込む
const db = require('./lib/db');

//db: connect()
const con = db.connect();

let sql = '';
sql = 'SELECT * FROM users';



// const limit = 3;
// const offset = 0;
// let params = [limit, offset];
// let sql = 'SELECT * FROM users LIMIT ? OFFSET ?;';
con.query(sql, (err, results) => {
    if (err) throw err;
    results.forEach((user) =>{
        console.log(user.id);
        console.log(user.email);
    })

});


// params = { 'id': 5 };
sql = 'SELECT * FROM users WHERE ?;';
let params = {}
params = {id: 3}

con.query(sql, params, (err, results) => {
    if (err) throw err;
        let user = results[0];
        console.log(`${user.first_name} ${user.last_name}`);
    // } else {
    //     console.log('Not found user.');
    // }
});

//DB接続終了
con.end();