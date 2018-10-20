import "babel-polyfill";
import express from "express";
import renderer from "../helpers/renderer";
import { matchRoutes } from "react-router-config";
import Routes from "../../client/Routes";

const app = express();

//Middleware

//Routing
app.get("*", (req, res) => {
  const store = {};

  // const promises = matchRoutes(Routes, req.path)
  //   .map(({ route }) => {
  //     return route.loadData ? route.loadData(store) : null;
  //   })
  //   .map(promise => {
  //     if (promise) {
  //       return new Promise((resolve) => {
  //         promise.then(resolve).catch(resolve);
  //       });
  //     }
  //   });

  // Promise.all(promises).then(() => {
  //   const context = {};
  //   const content = renderer(req, store, context);

  //   if (context.url) {
  //     return res.redirect(301, context.url);
  //   }
  //   if (context.notFound) {
  //     res.status(404);
  //   }
  const context = {};
    res.send(renderer(req));
  // });
});

module.exports=app;