
module.exports={
  "development": {
    "username": "root",
    "password": "Daniela8!",
    "database": "xeric_files",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "burger12?",
    "database": "xeric_files_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production":{
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
