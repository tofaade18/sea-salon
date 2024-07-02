module.exports = app => {
    const home = require("../controllers/controller.js");
    const ulas = require("../controllers/ulasan.js");
    const user= require("../controllers/user.controller.js");

  
    var router = require("express").Router();

    router.post("/", home.create);
    router.get("/reservation", home.findAllreviews);
    router.get("/:id", home.findAll);//
    router.put("/edit/:id", home.update);
    router.delete("/delete/:id", home.delete);//

    router.get("/", ulas.findAllreviews);//

    router.get("/ulasan/:id", ulas.findAll);
    router.post("/ulpost/", ulas.create)
  
    router.put("/ulupdate/:id", ulas.update);
      
    router.delete("/uldel/:id", ulas.deleteul);
    
    app.use('/api/home', router);
  };