const defaultConfig = require("./config");
const fs = require("fs")

const readConfigFile = () => {

};

const combineConfig = (fileConfig) => {
  return {
    ...defaultConfig,
    ...fileConfig,
  };
};

const getConfig = () => {
  const fileConfig = readConfigFile();
  const config = combineConfig(fileConfig);

  return config;
};

module.export = getConfig;
