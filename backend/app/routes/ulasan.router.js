module.exports = app => {
    const ulas = require("../controllers/ulasan.js");
  
    var router = require("express").Router();

    router.get("/ulasan/:id", ulas.findAll);
    router.post("/ulpost/", ulas.create)
  
    router.put("/ulupdate/:id", ulas.update);
      
    router.delete("/uldel/:id", ulas.deleteul);
  
    app.use('/api/ulas', router);
  };