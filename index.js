const csvjson = require('csvjson');
const { getCsvData } = require('./utils/utils');
const { constants } = require('./constants');

const csvToJson = async function(csvPath) {
  try {
    const csvData = await getCsvData(csvPath, {});
    const out = csvjson.toObject(csvData);
    return out;
  } catch (error) {
    throw new Error(
      {
        msg: "Could not parse the data to JSON",
        error: error
      }
    );
  }
}

exports.handler = () => {
  return csvToJson(constants.CSV_PATH);
};



