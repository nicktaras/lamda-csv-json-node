const csvjson = require('csvjson');
const { getCsvData } = require('./utils/utils');
const csvPath = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTdqj0TGM8nEMJrQyUPzOyNop4CMDqpzbMaZZYf3aCtVqMCxGJ0W-jf3J8dayz3KtI1z4KScuvs7Lqf/pub?output=csv';

const csvToJson = async function() {
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
  return csvToJson();
};



