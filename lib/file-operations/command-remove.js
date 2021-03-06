const fs = require('fs');
const aliasExists = require('./alias-exists');
const CONSTANTS = require('../util/constants');

const commandRemove = (alias) => {

  try {

    if(!aliasExists(alias)) {
      console.log(`Cannot delete, command ${alias} does not exist!`);
      return false;
    }

    fs.unlinkSync(`${CONSTANTS.ROOT_DIR}/${alias}`);
    console.log(`Removed command ${alias}`);
    return true;

  } catch (err) {
    console.error('Err! Error removing command', err);
    return;
  }
};

module.exports = commandRemove;
