process.env.BABEL_ENV = process.env.BABEL_ENV || "production";
process.env.NODE_ENV = process.env.NODE_ENV || "production";

require("soya-next/config/default");

process.on("unhandledRejection", err => {
  throw err;
});

const { appDir } = require("../config/paths");
const { join } = require("path");
const nextExport = require("next/dist/export").default;
// @remove-on-eject-begin
const { PHASE_EXPORT } = require("next/constants");
const loadConfig = require("next/dist/server/config").default;

const defaultConf = require("../next.config");
const userConf = loadConfig(PHASE_PRODUCTION_BUILD, appDir);
const conf = defaultConf(userConf);
// @remove-on-eject-end

nextExport(
  appDir,
  {
    silent: false,
    outdir: join(appDir, "out")
  }
  // @remove-on-eject-begin
  , conf
  // @remove-on-eject-begin
);
