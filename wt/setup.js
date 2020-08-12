#!/usr/bin/env node

//clean the console
const cleanup = () => {
    console.log("");
    console.log("");
    console.log("------------------------------------------------------");
    console.log("------------ WICKEDTEMPLATES BOILERPLATE -------------");
    console.log("");
    console.log("");
    console.log("");
    console.log("------------------------------------------------------");;
    console.log("");
    console.log("");
};
cleanup();


// create structure folder
const structureGenerator = require("folder-structure-generator");
const jsonStructure = require("./structure.json");



//export
module.exports = structureGenerator(jsonStructure);


process.exit(0);
