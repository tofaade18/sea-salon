module.exports = {
  "Dev":{
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "shineofblg02",
    DB: "SEA-Salon",
    dialect: "postgres",
  },
  "production": {
    HOST: "roundhouse.proxy.rlwy.net:18664/railway",
    USER: "postgres",
    PASSWORD: "ozPlGlUPUiCRrllvdqytGJJXZXNnfwde",
    DB: "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}