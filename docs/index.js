// Aquí se reune toda la documentación

const basicInfo = require("./basicInfo");
const components = require("./components");
const tasks = require("./tasks");

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks
};
