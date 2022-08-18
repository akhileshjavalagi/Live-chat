import APP from "express";
import connectiondb from "./dbConnection";
import configexpress from  "./config"
import applyRoutes from "./routes";

const app = new APP();

configexpress(app);

const PORT = 2468;


const start = () => {

    Promise.all([connectiondb()])
      .then(() => {
        app.listen(PORT);
        console.log(`Server started on Port ${PORT}`);
        applyRoutes(app)
      })
  };
  
  start();