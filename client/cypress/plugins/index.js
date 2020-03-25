/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const fs = require('fs-extra');
const path = require('path');
const mergeJSON = require('merge-json');

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
async function getConfigurationByFile(environment) {
  const defaultConfigFile = path.resolve('cypress', 'config', 'defaults.json');
  const envConfigFile = path.resolve(
    'cypress',
    'config',
    `${environment}.json`
  );

  const defaultConfigObj = await fs.readJson(defaultConfigFile);
  const envConfigObj = await fs.readJson(envConfigFile);
  return mergeJSON.merge(defaultConfigObj, envConfigObj);
}

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const environment = config.env.environment || 'develop';
  return getConfigurationByFile(environment);
};
