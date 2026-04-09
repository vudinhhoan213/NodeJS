const NewRouter = require("./news");
const SiteRouter = require("./site");

function route(app) {
  app.use("/news", NewRouter);

  app.use("/", SiteRouter);
}

module.exports = route;
